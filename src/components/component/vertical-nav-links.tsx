'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DeviceNavLinks = () => {
  const pathname = usePathname()
  return (
    <nav
      className='text-muted-foreground grid gap-4 text-gray-500'
      x-chunk='dashboard-04-chunk-0'
    >
      <Link
        href='/devices'
        className={pathname === '/devices' ? 'text-black' : ''}
      >
        General
      </Link>
      <Link href='/devices/led' className={pathname === '/devices/led' ? 'text-black' : ''}>LED</Link>
      <Link href='/devices/servo' className={pathname === '/devices/servo' ? 'text-black' : ''}>Servo</Link>
      <Link href='/devices/fan' className={pathname === '/devices/fan' ? 'text-black' : ''}>Fan</Link>
      <Link href='/devices/password' className={pathname === '/devices/password' ? 'text-black' : ''}>Password</Link>
    </nav>
  )
}

export default DeviceNavLinks
