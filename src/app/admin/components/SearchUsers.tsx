'use client'

import { Button } from '@/components/Button'
import { usePathname, useRouter } from 'next/navigation'

export const SearchUsers = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='w-full max-w-2xl p-4 bg-white shadow-md rounded-lg'>
      <form
        className='flex flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.currentTarget
          const formData = new FormData(form)
          const queryTerm = formData.get('search') as string
          router.push(pathname + '?search=' + queryTerm)
        }}
      >
        <label className='flex gap-4' htmlFor="search">Search for users: 
            <input className='flex-1 border-2 rounded px-2 border-[var(--color-primary)]' id="search" name="search" type="text" />
        </label>
        <Button type="submit" href={''}>Submit</Button>
      </form>
    </div>
  )
}