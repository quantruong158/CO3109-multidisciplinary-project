'use client'
import { useEffect, useRef, useState } from 'react'
import { Switch } from '../ui/switch'
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const ToggleSwitch = ({
  init_value,
  post_function,
}: {
  init_value: boolean
  post_function: any
}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [value, setValue] = useState(init_value)
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(post_function, {
    type: '',
    value: value ? '1' : '0',
  })
  useEffect(() => {
    if (state.type !== '') {
      toast({
        title: state.type.toUpperCase(),
        description: `${state.value === '1' ? 'ON' : 'OFF'}`,
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
