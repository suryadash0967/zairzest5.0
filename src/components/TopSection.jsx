import React from 'react'

const TopSection = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/images/bgTop.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
        <img src="/images/girlBack.png" alt="Baddie" className="relative mx-auto h-[100vh] z-20"/>
        <img src="/images/zairzestUnfill.png" alt="" className='absolute top-[15%] md:h-[350px] left-[10%] right-[10%] z-40' />
        <img src="/images/zairzestFill.png" alt="" className='absolute top-[15%] md:h-[350px] left-[10%] z-10' />
    </div>
  )
}

export default TopSection
