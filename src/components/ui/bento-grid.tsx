import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import { Button } from './button'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  value,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: string
  value?: string
}) => {
  return (
    <div
      className={cn(
        roboto.className,
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-gray-300 bg-opacity-25 p-4 shadow-input backdrop-blur-sm transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className,
      )}
    >
      {header}
      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        <div className='mb-2 mt-2 font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
        <p className='mt-2 text-end text-5xl font-extrabold text-red-700 md:text-6xl'>
          {value}
        </p>
      </div>
      <Button
        variant='outline'
        className='bg-opacity-30 transition duration-200 group-hover/bento:-translate-y-1'
      >
        To Settings
      </Button>
    </div>
  )
}
