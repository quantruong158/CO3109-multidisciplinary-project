'use client'
import { RefreshCcw } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const RefreshButton = () => {
  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh()
    }, 1000 * 10)
    return () => clearInterval(interval)
  }, [])
  return (
    <Button
      className='absolute -right-0 top-0 z-30 transition-transform duration-200 ease-in-out hover:scale-110 md:-right-16'
      onClick={() => router.refresh()}
    >
      <RefreshCcw size={24} />
    </Button>
  )
}

export default RefreshButton
