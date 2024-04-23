import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import PasswordInput from '@/components/component/password-input'
import PasswordForm from '@/components/component/password-form'
import { getLastDataFromFeed } from '@/lib'
export const metadata: Metadata = {
  title: 'Manage Password',
  description: 'YoloHome password page',
}

const page = async () => {
  const passwordData = await getLastDataFromFeed('password')
  const passwordValue = passwordData.value
  return (
    <div className='flex flex-col gap-5'>
      <Card
        x-chunk='dashboard-04-chunk-1'
        className='bg-opacity-50 backdrop-blur-sm'
      >
        <CardHeader>
          <CardTitle>Current Password</CardTitle>
          <CardDescription>Current door password</CardDescription>
        </CardHeader>
        <CardContent className='flex items-center gap-2'>
          <PasswordInput value={passwordValue} />
        </CardContent>
      </Card>
      <Card
        x-chunk='dashboard-04-chunk-2'
        className='bg-opacity-50 backdrop-blur-sm'
      >
        <CardHeader>
          <CardTitle>New Password</CardTitle>
          <CardDescription>Enter new password for the door</CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default page
