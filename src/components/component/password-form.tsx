'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
import { changeDoorPassword } from '@/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const PasswordForm = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [isHiding, setIsHiding] = useState(true)
  const toggleVisibility = (e: any) => {
    e.preventDefault()
    setIsHiding((prev) => !prev)
  }
  const [state, formAction] = useFormState(changeDoorPassword, {
    type: '',
    value: '',
  })
  useEffect(() => {
    if (state.type !== '' && state.value !== '') {
      toast({
        title: state.type.toUpperCase(),
        description: `Password has been changed to ${state.value}`,
      })
      router.refresh()
    }
  }, [state])
  return (
    <form action={formAction} className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Input type={isHiding ? 'password' : 'text'} name='value' />
        <Button onClick={toggleVisibility}>
          {isHiding ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      <Submit />
    </form>
  )
}

function Submit() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit'>
      {pending ? 'Saving...' : 'Save'}
    </Button>
  )
}

export default PasswordForm
