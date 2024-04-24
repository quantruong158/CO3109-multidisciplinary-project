import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SpeedSlider from '@/components/component/speed-slider'
import { getLastDataFromFeed } from '@/lib'

export const metadata: Metadata = {
  title: 'Manage Fan',
  description: 'YoloHome fan page',
}

const page = async () => {
  const fan_data = await getLastDataFromFeed('fan')
  const fan_value = parseInt(fan_data.value)
  return (
    <Card className='bg-opacity-50 backdrop-blur-sm'>
      <CardHeader>
        <CardTitle>Fan</CardTitle>
        <CardDescription>Adjust Fan speed.</CardDescription>
      </CardHeader>
      <CardContent className='flex space-y-2'>
        <SpeedSlider value={fan_value} />
      </CardContent>
    </Card>
  )
}

export default page
