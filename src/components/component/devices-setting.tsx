const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import DeviceNavLinks from './vertical-nav-links'

export function Devices({
  children,
}: Readonly<{ 
  children: React.ReactNode
}>) {
  return (
    <div
      className={cn(
        roboto.className,
        'flex min-h-screen w-full flex-col items-center justify-center sm:max-w-[600px] xl:max-w-[900px]',
      )}
    >
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 p-2 md:gap-8 md:p-0'>
        <div className='mx-auto grid w-full max-w-6xl gap-2'>
          <h1 className='text-start text-4xl font-semibold'>Devices</h1>
        </div>
        <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
          <DeviceNavLinks />
          <div className='grid gap-6'>{children}</div>
        </div>
      </main>
    </div>
  )
}
