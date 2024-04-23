import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account',
  description: 'YoloHome account page',
}

const page = () => {
  return <div className='mt-20 text-center'>Account page</div>
}


export default page
