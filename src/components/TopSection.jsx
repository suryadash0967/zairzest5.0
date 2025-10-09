import React from 'react'
import LogoSequence from './LogoSequence'

const TopSection = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/images/bgTop.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <LogoSequence />
      <img src="/images/girlBack.png" alt="Baddie" className="hero-section-img" />

      <div className='absolute inset-0 flex items-center flex-col justify-between px-auto' >

        <div id='zairzest' className='absolute text-[35vw] sm:text-[230px] top-0 w-full text-center z-10 lg:text-[360px] md:text-[280px] xl:text-[420px]  '>
          ZAIRZEST
        </div>

        <div id='zairzestunfill' className='absolute text-[35vw] sm:text-[230px] top-0 w-full text-center z-20 md:text-[280px] lg:text-[360px] xl:text-[420px] '>
          ZAIRZEST
        </div>
        <div id='fivebelow' className='absolute text-[80px] top-[calc(35vw+30px)] md:top-[calc(230px+90px)] right-2 sm:right-16 lg:hidden z-20'>
          v.fiv<span className='text-red-500'>5</span>
        </div>
        <div id="topb" className='flex flex-col-reverse lg:flex-row absolute top-3/4 left-0 right-0 justify-center gap-40 items-center z-30'>
          <div id="yap" className='text-left text-white w-[380px] md:w-[430px] backdrop-blur-2xl z-30 border-1 border-white/40 p-3 rounded-xl'>
            The blueprints burned. Yet the grid hums, the circuits breathe, and the execution never halts. What remains are echoes, recursive loops of will and logic, ghosts of commands that refuse to fade. The Code still runs.
            <span className='bg-white text-red-500'>
              <br />
              Scroll to Join The Echo
            </span>
          </div>
          <div id='five' className='hidden lg:block text-[80px]  z-30 '>
            v.fiv<span className='text-red-500'>5</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopSection
