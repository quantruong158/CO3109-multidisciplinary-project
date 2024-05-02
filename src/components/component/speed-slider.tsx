'use client'
import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useFormState, useFormStatus } from 'react-dom'
import { changeDeviceValue } from '@/actions'

const SpeedSlider = ({ value }: { value: number }) => {
  const [currentValue, setCurrentValue] = useState(value)
  const router = useRouter()
  const { toast } = useToast()
  const [state, formAction] = useFormState(changeDeviceValue, {
    type: '',
    value: value.toString(),
    key: 'fan',
  })
  useEffect(() => {
    if (state.type !== '') {
      toast({
        title: state.type.toUpperCase(),
        description:
          state.type === 'fail'
            ? state.value
            : `Speed changed to ${state.value}%`,
      })
      router.refresh()
    }
    setCurrentValue(parseInt(state.value))
  }, [state])
  return (
    <form action={formAction} className='flex w-full flex-col gap-5'>
      <Slider
        name='value'
        defaultValue={[value]}
        max={100}
        step={1}
        onValueChange={(value) => {
          setCurrentValue(value[0])
        }}
      />
      <p className='font-semibold'>Current Value: {currentValue}%</p>
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

export default SpeedSlider
