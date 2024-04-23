'use client'
import { useEffect, useRef, useState } from 'react'
import { Switch } from '../ui/switch'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const LedSwitch = ({
  init_value,
  post_function,
}: {
  init_value: boolean
  post_function: any
}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [value, setValue] = useState(init_value)
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
      <Switch
        type='submit'
        name='value'
        value={value ? '1' : '0'}
        checked={value}
      />
    </form>
  )
}

export default LedSwitch
