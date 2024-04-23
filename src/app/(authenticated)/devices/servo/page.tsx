import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage Servo',
  description: 'YoloHome servo page',
}

const page = () => {
  return <div className='mt-20 text-center'>servo page</div>
}

export default page
