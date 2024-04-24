'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Eye, EyeOff } from 'lucide-react'

const Password = ({ value }: { value: string }) => {
  const [isHiding, setIsHiding] = useState(true)
  return (
    <div className='flex flex-col items-end gap-2'>
      <p
        className={`mt-2 text-end text-4xl font-extrabold ${isHiding ? 'text-red-700' : 'text-green-500'} md:text-5xl`}
      >
        {isHiding ? '*'.repeat(value.length) : value}
      </p>
      <Button
        className='transition duration-200 group-hover/bento:-translate-x-2 group-hover/bento:-translate-y-1'
        onClick={() => {
          setIsHiding((prev) => !prev)
        }}
      >
        {isHiding ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  )
}

export default Password
