import { SignUp } from '@/components/component/signup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup to Yolohome',
}

export default function page() {
  return (
    <div className='flex mx-2 min-h-screen items-center justify-center'>
      <SignUp />
    </div>
  )
}
