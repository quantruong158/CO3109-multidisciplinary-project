import { link } from 'fs'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import RefreshButton from './refresh-button'
import Password from './password'

interface DashboardProps {
  temp_value: string
  humidity_value: string
  light_value: string
  inled_value: string
  outled_value: string
  servo_value: string
  fan_value: string
  password_value: string
}

const Dashboard = ({
  temp_value,
  humidity_value,
  light_value,
  inled_value,
  outled_value,
  servo_value,
  fan_value,
  password_value,
}: DashboardProps) => {
  const led_ui = (
    <div className='mt-2 flex flex-col flex-wrap justify-end text-end text-4xl font-extrabold text-red-800 md:text-4xl'>
      <span className='text-nowrap'>{`In: ${inled_value === '0' ? 'OFF' : 'ON'}`}</span>
      <span className='text-nowrap'>{`Out: ${outled_value === '0' ? 'OFF' : 'ON'}`}</span>
    </div>
  )
  const items = [
    {
      title: 'Temperature',
      description: 'Current temperature recorded by the sensor.',
      value: `${temp_value}°C`,
      has_settings: false,
      link: '',
    },
    {
      title: 'Humidity',
      description: 'Current humidity recorded by the sensor.',
      value: `${humidity_value}%`,
      has_settings: false,
      link: '',
    },
    {
      title: 'Lighting',
      description: 'Current lighting recorded by the sensor.',
      value: `${light_value}`,
      has_settings: false,
      link: '',
    },
    {
      title: 'LED',
      description:
        'Current state of the LED lights inside and outside the house.',
      // value: `In: ${inled_value === '0' ? 'OFF' : 'ON'} / Out: ${outled_value === '0' ? 'OFF' : 'ON'}`,
      custom_ui: led_ui,
      has_settings: true,
      link: '/devices/led',
    },
    {
      title: 'Fan',
      description: 'Current state of the fan inside the house.',
      value: `${fan_value === '0' ? 'OFF' : 'ON'}`,
      has_settings: true,
      link: '/devices/fan',
    },
    {
      title: 'Servo',
      description: 'Control the servo motor to open and close the door.',
      value: `${servo_value === '0' ? 'CLOSED' : 'OPEN'}`,
      has_settings: true,
      link: '/devices/servo',
    },
    {
      title: 'Password',
      description: 'Current door password.',
      has_settings: true,
      custom_ui: <Password value={password_value} />,
      link: '/devices/password',
    },
  ]

  return (
    <>
      <BentoGrid className='relative sm:max-w-[600px] xl:max-w-[900px]'>
        <RefreshButton />
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            value={item.value}
            has_settings={item.has_settings}
            link={item.link}
            custom_ui={item.custom_ui}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </>
  )
}

export default Dashboard
