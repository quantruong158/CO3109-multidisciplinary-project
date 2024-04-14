import Dashboard from '@/components/component/dashboard'
import { getSession } from '@/lib'

export default function Home() {
  const token = getSession()
  return (
    <main className='mt-32 flex w-full items-center justify-center'>
      <Dashboard />
    </main>
  )
}
