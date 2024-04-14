import DeviceBlock from './device-block'

const Dashboard = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full items-center justify-center sm:max-w-[600px] xl:max-w-[900px] gap-5 mx-5'>
      <DeviceBlock
        title='Temperature'
        value='37'
        unit='°C'
        classname='border-red-800 text-red-800'
      />
      <DeviceBlock
        title='Humidity'
        value='20'
        unit='%'
        classname='border-blue-800 text-blue-800'
      />
      <DeviceBlock
        title='Lighting'
        value='37'
        unit='W/m²'
        classname='border-yellow-800 text-yellow-800'
      />
    </div>
  )
}

export default Dashboard
