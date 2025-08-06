import { Button } from '@/components/Button'
import { checkRole } from '@/utils/roles'
import { clerkClient } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { removeRole, setRole } from './_actions'
import { SearchUsers } from './components/SearchUsers'

export default async function AdminDashboard(params: {
  searchParams: Promise<{ search?: string }>
}) {
    if (!checkRole('admin')) {
        redirect('/')
    }

    const query = (await params.searchParams).search

    const client = await clerkClient()

    const users = query ? (await client.users.getUserList({ query })).data : []

    return (
        <section className='h-screen text-black mx-4 xl:mx-auto max-w-[1440px] flex flex-col items-center justify-center gap-4'>
            <p className='w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg'>This is the protected admin dashboard restricted to users with the `admin` role.</p>

            <SearchUsers />

            <section className='w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 max-h-[1000px] overflow-y-auto'>
                {users.map((user) => {
                    return (
                        <div className='flex items-center justify-between' key={`${user.id}`}>
                            <div className='flex flex-col gap-2'>
                                <p>
                                    Name: {user.firstName} {user.lastName}
                                </p>
                                <p>
                                    Email: {
                                        user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)
                                        ?.emailAddress
                                    }
                                </p>
                                <p>Role: {user.publicMetadata.role as string}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <form action={setRole}>
                                    <input type="hidden" value={user.id} name="id" />
                                    <input type="hidden" value="admin" name="role" />
                                    <Button disabled={user.publicMetadata.role === 'admin'} type="submit" href={''} variant='tertiary'>Make Admin</Button>
                                </form>

                                <form action={setRole}>
                                    <input type="hidden" value={user.id} name="id" />
                                    <input type="hidden" value="moderator" name="role" />
                                    <Button disabled={user.publicMetadata.role === 'moderator'} type="submit" href={''} variant='tertiary'>Make Moderator</Button>
                                </form>

                                <form action={removeRole}>
                                    <input type="hidden" value={user.id} name="id" />
                                    <Button type="submit" href={''} variant='tertiary'>Remove Role</Button>
                                </form>
                            </div>
                        </div>
                        )
                    })}
            </section>
        </section>
    )
}