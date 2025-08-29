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
        <div id='zairzest' className='absolute  top-0 w-full h-full text-center z-10 lg:text-[360px] md:text-[200px] xl:text-[400px]  '>
            ZAIRZEST
        </div>
        <div id='zairzestunfill' className='absolute  top-0 w-full h-full text-center z-20 md:text-[200px] lg:text-[360px] xl:text-[400px] '>
            ZAIRZEST
        </div>
        <div className='absolute  top-[70%] w-full h-full text-center z-20 '>
        <div className='b text-white w-[380px] px-3'>

            The blueprints burned. Yet the grid hums, the circuits breathe, and the execution never halts.What remains are echoes, recursive loops of will and logic, ghosts of commands that refuse to fade. The Code still runs. 
            <span className='bg-white text-red-500'>

            Scroll to Join The Echo
            </span>
        </div>
        </div>
    </div>
  )
}

export default TopSection
