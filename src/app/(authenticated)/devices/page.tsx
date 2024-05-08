import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devices',
  description: 'YoloHome devices page',
}

const page = () => {
  return (
    <div>
      <h1 className='text-xl'>HERE YOU CAN CHANGE THE VALUE OF YOUR DEVICES</h1>
    </div>
  )
}

export default page
