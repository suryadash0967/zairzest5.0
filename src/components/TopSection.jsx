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
        <img src="/images/girlBack.png" alt="Baddie" className="relative mx-auto h-screen z-20"/>
        
        <div className='absolute inset-0 flex items-center flex-col justify-between px-auto' >
        
        <div id='zairzest' className='absolute  top-0 w-full text-center z-10 lg:text-[360px] md:text-[200px] xl:text-[420px]  '>
            ZAIRZEST
        </div>

        <div id='zairzestunfill' className='absolute  top-0 w-full text-center z-20 md:text-[200px] lg:text-[360px] xl:text-[420px] '>
            ZAIRZEST
        </div>
        <div id="topb" className='flex flex-col-reverse lg:flex-row absolute top-3/4 left-0 right-0 justify-center gap-20 items-center z-30'>
        <div id="yap" className='text-left text-white w-[380px] backdrop-blur-2xl z-30 hidden lg:block'>


            The blueprints burned. Yet the grid hums, the circuits breathe, and the execution never halts. What remains are echoes, recursive loops of will and logic, ghosts of commands that refuse to fade. The Code still runs. 
            <span className='bg-white text-red-500'>

            Scroll to Join The Echo
            </span>
        </div>
         <div id='five' className='text-[80px]  z-30 '>
            v.fiv<span className='text-red-500'>5</span>
        </div>

        </div>
        </div>
    </div>
  )
}

export default TopSection
