const Background = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div
      className='bckgrnd absolute inset-0 -z-[99]'
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23a6876e' fill-opacity='0.1'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className='gradient right-0' />
      {children}
    </div>
  )
}

export default Background