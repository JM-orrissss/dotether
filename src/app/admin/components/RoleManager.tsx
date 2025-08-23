'use client'

import { startTransition, useOptimistic } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { setRole, removeRole } from '../_actions'

type SafeUser = {
  id: string
  firstName: string | null
  lastName: string | null
  emailAddresses: { id: string; emailAddress: string }[]
  primaryEmailAddressId: string | null
  role: string | null
}

export function RoleManager({ user }: { user: SafeUser }) {
  const router = useRouter()
  const [optimisticRole, setOptimisticRole] = useOptimistic(user.role)

  async function handleSetRole(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // prevent navigation
    const formData = new FormData(e.currentTarget)
    const newRole = formData.get('role') as string
    startTransition(() => {
      setOptimisticRole(newRole)
    })

    try {
      await setRole(formData)
      router.refresh() // ensure server state syncs
    } catch (err) {
      console.error(err)
      router.refresh()
    }
  }

  async function handleRemoveRole(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => {
      setOptimisticRole(null)
    })

    try {
      await removeRole(formData)
      router.refresh()
    } catch (err) {
      console.error(err)
      router.refresh()
    }
  }

  const primaryEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  )?.emailAddress

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex flex-col gap-1">
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Email: {primaryEmail}</p>
        <p>Role: {optimisticRole ?? 'none'}</p>
      </div>

      <div className="flex flex-col gap-2">
        <form onSubmit={handleSetRole}>
          <input type="hidden" name="id" value={user.id} />
          <input type="hidden" name="role" value="admin" />
          <Button
            href={''}
            underline
            disabled={optimisticRole === 'admin'}
            type="submit"
            variant="tertiary"
          >
            Make Admin
          </Button>
        </form>

        <form onSubmit={handleSetRole}>
          <input type="hidden" name="id" value={user.id} />
          <input type="hidden" name="role" value="moderator" />
          <Button
            href={''}
            underline
            disabled={optimisticRole === 'moderator'}
            type="submit"
            variant="tertiary"
          >
            Make Moderator
          </Button>
        </form>

        <form onSubmit={handleRemoveRole}>
          <input type="hidden" name="id" value={user.id} />
          <Button
            href={''}
            underline
            disabled={optimisticRole === null}
            type="submit"
            variant="tertiary"
          >
            Remove Role
          </Button>
        </form>
      </div>
    </div>
  )
}
