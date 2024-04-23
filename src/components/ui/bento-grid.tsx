import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import { Button, buttonVariants } from './button'
import Link from 'next/link'

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
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 px-2 sm:auto-rows-[18rem] sm:grid-cols-3 md:px-0',
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
  has_settings,
  link,
  custom_ui,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: string
  value?: string
  has_settings: boolean
  link: string
  custom_ui?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        roboto.className,
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-700 border-opacity-20 bg-white bg-opacity-50 p-4 shadow-input backdrop-blur-sm transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className,
      )}
    >
      {header}
      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        <div className='mb-2 mt-2 font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='min-h-8 text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
        {custom_ui}
        {value && (
          <p className='mt-2 text-end text-4xl font-extrabold text-red-800 md:text-5xl'>
            {value}
          </p>
        )}
      </div>
      {has_settings && (
        <Link
          href={link}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'bg-opacity-30 transition duration-200 group-hover/bento:-translate-y-1',
          )}
        >
          To Settings
        </Link>
      )}
    </div>
  )
}
