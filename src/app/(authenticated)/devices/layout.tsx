import { Devices } from '@/components/component/devices-setting'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='mt-20 flex justify-center'>
      <Devices>{children}</Devices>
    </div>
  )
}
