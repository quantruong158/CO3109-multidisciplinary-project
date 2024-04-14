import { Login } from '@/components/component/login'
import { getSession } from '@/lib'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to Yolohome',
}

export default function page() {
  const token = getSession()
  if (token) {
    redirect('/')
  }
  return (
    <div className='min-h-screen w-full px-3 sm:px-0 lg:grid lg:grid-cols-2'>
      <Login />
    </div>
  )
}
