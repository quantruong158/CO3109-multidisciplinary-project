'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { register } from '@/actions'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'
import { useRouter } from 'next/navigation'

export function SignUp() {
  const router = useRouter()
  const { toast } = useToast()
  const [state, formAction] = useFormState(register, {
    type: '',
    value: '',
  })
  useEffect(() => {
    if (state.type !== '' && state.value !== '') {
      toast({
        title: state.type.toUpperCase(),
        description: state.value,
        action: (
          <ToastAction
            onClick={() => {
              router.push('/login')
            }}
            altText='Go to Login'
          >
            Go to Login
          </ToastAction>
        ),
      })
    }
  }, [state])
  return (
    <>
      <Card className='mx-auto max-w-sm border-2 border-primary bg-opacity-60'>
        <CardHeader>
          <CardTitle className='text-xl font-bold text-primary'>
            Sign Up for YoloHome
          </CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='grid gap-4' action={formAction}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>First name</Label>
                <Input id='first-name' placeholder='A' required name='fname' />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Last name</Label>
                <Input
                  id='last-name'
                  placeholder='Nguyen'
                  required
                  name='lname'
                />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='nguyenvana@example.com'
                required
                name='email'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' name='password' />
            </div>
            <Button type='submit' className='w-full bg-primary'>
              Create an account
            </Button>
            <Button disabled variant='outline' className='w-full'>
              Sign up with Google
            </Button>
          </form>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/login' className='underline'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
