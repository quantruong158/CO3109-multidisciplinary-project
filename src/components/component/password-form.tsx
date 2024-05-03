'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
import { changeDeviceValue } from '@/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const PasswordForm = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [isHiding, setIsHiding] = useState(true)
  const [value, setValue] = useState('')
  const toggleVisibility = (e: any) => {
    e.preventDefault()
    setIsHiding((prev) => !prev)
  }
  const [state, formAction] = useFormState(changeDeviceValue, {
    type: '',
    value: '',
    key: 'password',
  })
  useEffect(() => {
    if (state.type !== '' && state.value !== '') {
      toast({
        title: state.type.toUpperCase(),
        description:
          state.type === 'success'
            ? `Password has been changed to ${state.value}`
            : state.value,
      })
      router.refresh()
    }
  }, [state])
  return (
    <form action={formAction} className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Input
          type={isHiding ? 'password' : 'text'}
          name='value'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={toggleVisibility}>
          {isHiding ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      {value.length > 4 && (
        <p className='text-sm text-red-500'>
          Password must be less than 5 characters!
        </p>
      )}
      <Submit value={value} />
    </form>
  )
}

function Submit({ value }: { value: string }) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending || value.length > 4} type='submit'>
      {pending ? 'Saving...' : 'Save'}
    </Button>
  )
}

export default PasswordForm
