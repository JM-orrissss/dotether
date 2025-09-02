'use server'

import { checkRole } from '@/utils/roles'
import { clerkClient } from '@clerk/nextjs/server'

export async function setRole(formData: FormData): Promise<void> {
  const client = await clerkClient()

  if (!checkRole('admin')) {
    return
  }

  try {
    await client.users.updateUserMetadata(formData.get('id') as string, {
      publicMetadata: { role: formData.get('role') },
    })
  } catch (err) {
    console.error(err)
  }
}

export async function removeRole(formData: FormData): Promise<void> {
  const client = await clerkClient()

  try {
    await client.users.updateUserMetadata(formData.get('id') as string, {
      publicMetadata: { role: 'user' },
    })
  } catch (err) {
    console.error(err)
  }
}