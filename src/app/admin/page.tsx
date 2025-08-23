import { checkRole } from '@/utils/roles'
import { clerkClient } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { SearchUsers } from './components/SearchUsers'
import { RoleManager } from './components/RoleManager'

export default async function AdminDashboard(params: {
  searchParams: Promise<{ search?: string }>
}) {
  if (!checkRole('admin')) {
    redirect('/')
  }

  const query = (await params.searchParams).search
  const client = await clerkClient()
  const users = query ? (await client.users.getUserList({ query })).data : []

  // 🔥 Serialize to plain objects
  const safeUsers = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddresses: user.emailAddresses.map((email) => ({
      id: email.id,
      emailAddress: email.emailAddress,
    })),
    primaryEmailAddressId: user.primaryEmailAddressId,
    role: user.publicMetadata.role as string | null,
  }))

  return (
    <section className="h-screen text-black mx-4 xl:mx-auto max-w-[1440px] flex flex-col items-center justify-center gap-4">
      <p className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        This is the protected admin dashboard restricted to users with the
        `admin` role.
      </p>

      <SearchUsers />

      {safeUsers.length > 0 && (
        <section className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 max-h-[1000px] overflow-y-auto">
          {safeUsers.map((user) => (
            <RoleManager key={user.id} user={user} />
          ))}
        </section>
      )}
    </section>
  )
}
