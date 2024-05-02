'use client'
import { useEffect, useRef, useState } from 'react'
import { Switch } from '../ui/switch'
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { toggleDevice } from '@/actions'

const ToggleSwitch = ({
  init_value,
  device_key,
}: {
  init_value: boolean
  device_key: string
}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [value, setValue] = useState(init_value)
  const [state, formAction] = useFormState(toggleDevice, {
    type: '',
    value: value ? '1' : '0',
    key: device_key,
  })
  useEffect(() => {
    if (state.type !== '') {
      toast({
        title: state.type.toUpperCase(),
        description:
          state.type === 'fail'
            ? state.value
            : `${state.value === '1' ? 'ON' : 'OFF'}`,
      })
      router.refresh()
    }
    setValue(state.value === '1' ? true : false)
  }, [state])

  return (
    <form action={formAction}>
      <Submit value={value} />
    </form>
  )
}

function Submit({ value }: { value: boolean }) {
  const { pending } = useFormStatus()
  return (
    <Switch
      disabled={pending}
      type='submit'
      name='value'
      value={value ? '1' : '0'}
      checked={value}
    />
  )
}

export default ToggleSwitch
