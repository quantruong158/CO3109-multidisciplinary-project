import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ToggleSwitch from '@/components/component/toggle-switch'
import { getLastDataFromFeed } from '@/lib'

export const metadata: Metadata = {
  title: 'Manage LED',
  description: 'YoloHome LED page',
}

const page = async () => {
  const inled_data = await getLastDataFromFeed('in-led')
  const inled_value = inled_data.value === '0' ? false : true
  const outled_data = await getLastDataFromFeed('led')
  const outled_value = outled_data.value === '0' ? false : true
  return (
    <div className='flex flex-col justify-center gap-5'>
      <Card className='bg-opacity-50 backdrop-blur-sm'>
        <CardHeader>
          <CardTitle>INSIDE LED</CardTitle>
          <CardDescription>Toggle the inside LED.</CardDescription>
        </CardHeader>
        <CardContent className='flex space-y-2'>
          <ToggleSwitch init_value={inled_value} device_key='in-led' />
        </CardContent>
      </Card>
      <Card className='bg-opacity-50 backdrop-blur-sm'>
        <CardHeader className='text-end'>
          <CardTitle>OUTSIDE LED</CardTitle>
          <CardDescription>Toggle the outside LED.</CardDescription>
        </CardHeader>
        <CardContent className='flex justify-end space-y-2'>
          <ToggleSwitch init_value={outled_value} device_key='led' />
        </CardContent>
      </Card>
    </div>
  )
}

export default page
