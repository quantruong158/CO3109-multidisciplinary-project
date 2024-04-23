'use client'
import { RefreshCcw } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const RefreshButton = () => {
  const router = useRouter()
  return (
    <Button
      className='absolute -right-0 md:-right-16 top-0 z-30 hover:scale-110 transition-transform duration-200 ease-in-out'
      onClick={() => router.refresh()}
    >
      <RefreshCcw size={24} />
    </Button>
  )
}

export default RefreshButton
