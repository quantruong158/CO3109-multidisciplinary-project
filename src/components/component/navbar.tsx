import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Menu, AreaChart, Settings2, User, Home } from 'lucide-react'
import { redirect } from 'next/navigation'
import { Button } from '../ui/button'
import { logout } from '@/actions'
import NavLinks from './navlinks'

const NavBar = () => {
  const onLogoutSubmit = async (formData: FormData) => {
    'use server'
    await logout()
    redirect('/login')
  }
  return (
    <div className='fixed left-0 right-0 top-0 z-[40] flex h-16 items-center justify-center border-b-2 border-gray-300 border-opacity-25 bg-white bg-opacity-50 px-3 backdrop-blur-sm sm:px-0'>
      <div className='flex h-16 w-full items-center justify-between sm:max-w-[600px] xl:max-w-[900px]'>
        <header className='text-primary'>
          <Link
            href='/'
            className='flex select-none items-center gap-2 text-2xl font-semibold '
          >
            <Home size={28} />
            YoloHome
          </Link>
        </header>
        <nav>
          <ul className='hidden items-center gap-10 text-sm text-gray-500 sm:flex'>
            <NavLinks />
            <li>
              <form action={onLogoutSubmit}>
                <Button type='submit'>Log out</Button>
              </form>
            </li>
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className='sm:hidden'>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-2 sm:hidden'>
              <DropdownMenuItem asChild>
                <Link href='/' className='gap-2 mt-1'>
                  <AreaChart size={20} />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/devices' className='gap-2 mt-1'>
                  <Settings2 size={20} />
                  Devices
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/account' className='gap-2 mt-1'>
                  <User size={20} />
                  Account
                </Link>
              </DropdownMenuItem>
              <form action={onLogoutSubmit} className='mt-1'>
                <Button size='sm' type='submit' className='w-full'>
                  Log out
                </Button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
