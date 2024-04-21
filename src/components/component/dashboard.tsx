import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import DeviceBlock from './device-block'

const Dashboard = () => {
  return (
    <BentoGrid className='mx-auto max-w-4xl'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          value={item.value}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
    // <div className='flex flex-col sm:flex-row w-full items-center justify-center sm:max-w-[600px] xl:max-w-[900px] gap-5 mx-5'>
    //   <DeviceBlock
    //     title='Temperature'
    //     value='37'
    //     unit='°C'
    //     classname='border-red-800 text-red-800'
    //   />
    //   <DeviceBlock
    //     title='Humidity'
    //     value='20'
    //     unit='%'
    //     classname='border-blue-800 text-blue-800'
    //   />
    //   <DeviceBlock
    //     title='Lighting'
    //     value='37'
    //     unit='W/m²'
    //     classname='border-yellow-800 text-yellow-800'
    //   />
    // </div>
  )
}

export default Dashboard

const items = [
  {
    title: 'Temperature',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    value: '37°C'
  },
  {
    title: 'Humidity',
    description: 'Dive into the transformative power of technology.',
    value: '20%'
  },
  {
    title: 'Lighting',
    description: 'Discover the beauty of thoughtful and functional design.',
  },
  {
    title: 'LED',
    description:
      'Understand the impact of effective communication in our lives.',
  },
  {
    title: 'Servo',
    description: 'Join the quest for understanding and enlightenment.',
  },
  {
    title: 'Fan',
    description: 'Experience the thrill of bringing ideas to life.',
  },
  {
    title: 'Password',
    description: 'Embark on exciting journeys and thrilling discoveries.',
  },
]
