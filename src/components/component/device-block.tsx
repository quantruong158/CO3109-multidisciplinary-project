import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DeviceBlockProps {
  title: string
  value: string
  unit: string
  classname?: string
}

export default function DeviceBlock({
  title,
  value,
  classname,
  unit,
}: DeviceBlockProps) {
  return (
    <Card className={cn('bg-opacity-5 backdrop-blur-sm border-2 flex-1 w-full max-w-[350px]', classname)}>
      <CardHeader className='p-3'>
        <CardDescription className='text-lg font-semibold'>{title}</CardDescription>
        <CardTitle className='self-center text-6xl font-bold'>
          {value} <span className='text-xl'>{unit}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='text-muted-foreground text-xs'>
          +25% from last week
        </div>
      </CardContent>
      <CardFooter className='justify-end p-2'>
        <Button
          variant='outline'
          className='size-12 rounded-full border-2 p-0 text-black'
        >
          <Settings />
        </Button>
      </CardFooter>
    </Card>
  )
}
