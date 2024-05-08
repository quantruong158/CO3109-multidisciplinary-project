'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const pathname = usePathname()
  return (
    <>
      <li>
        <Link href='/' className={pathname === '/' ? 'text-black' : ''}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href='/devices'
          className={pathname.startsWith('/devices') ? 'text-black' : ''}
        >
          Devices
        </Link>
      </li>
    </>
  )
}

export default NavLinks
