'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { login } from '@/actions'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
export function Login() {
  const router = useRouter()
  const { toast } = useToast()
  const [state, formAction] = useFormState(login, {
    type: '',
    value: '',
  })
  useEffect(() => {
    if (state.type === 'success') {
      router.push('/')
    }
    if (state.type !== '' && state.value !== '') {
      toast({
        title: state.type.toUpperCase(),
        description: 'Email or Password is not correct!',
      })
    }
  }, [state])
  return (
    <>
      <form
        action={formAction}
        className='flex items-center justify-center py-12'
      >
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold text-primary'>Login</h1>
            <p className='text-balance text-gray-500 dark:text-gray-400'>
              Enter your email below to login to your account
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                placeholder='m@example.com'
                required
                type='email'
                name='email'
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input id='password' required type='password' name='password' />
              <Link
                className='ml-2 text-sm text-gray-900 underline underline-offset-2 dark:text-gray-50'
                href='#'
              >
                Forgot your password?
              </Link>
            </div>
            <Button className='w-full bg-primary' type='submit'>
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className='relative hidden select-none items-center justify-center bg-repeat text-7xl font-semibold text-primary dark:bg-gray-800 lg:flex'>
        <p className='z-10 p-4 outline outline-4 '>YoloHome</p>
      </div>
    </>
  )
}
