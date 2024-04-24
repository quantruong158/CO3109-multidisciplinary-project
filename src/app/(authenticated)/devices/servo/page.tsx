import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ToggleSwitch from '@/components/component/toggle-switch'
import { getLastDataFromFeed } from '@/lib'
import { toggleServo } from '@/actions'

export const metadata: Metadata = {
  title: 'Manage LED',
  description: 'YoloHome LED page',
}

const page = async () => {
  const servo_data = await getLastDataFromFeed('servo')
  const servo_value = servo_data.value === '0' ? false : true
  return (
    <Card className='bg-opacity-50 backdrop-blur-sm'>
      <CardHeader>
        <CardTitle>SERVO</CardTitle>
        <CardDescription>Toggle the Servo.</CardDescription>
      </CardHeader>
      <CardContent className='flex space-y-2'>
        <ToggleSwitch init_value={servo_value} post_function={toggleServo} />
      </CardContent>
    </Card>
  )
}

export default page
