import Dashboard from '@/components/component/dashboard'
import { getAllFeeds, getLastDataFromFeed, getSession } from '@/lib'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'YoloHome homepage',
}

interface Feed {
  temp?: string
  humidity?: string
  light?: string
  led?: string
  'in-led'?: string
  servo?: string
  fan?: string
  password?: string
}

export default async function Home() {
  const feeds = await getAllFeeds()
  let dict: Feed = {}
  for (const feed of feeds) {
    dict[feed.key as keyof Feed] = feed.last_value
  }

  return (
    <main className='mt-32 flex w-full items-center justify-center'>
      <Dashboard
        temp_value={dict['temp']!}
        humidity_value={dict['humidity']!}
        light_value={dict['light']!}
        inled_value={dict['in-led']!}
        outled_value={dict['led']!}
        servo_value={dict['servo']!}
        fan_value={dict['fan']!}
        password_value={dict['password']!}
      />
    </main>
  )
}
