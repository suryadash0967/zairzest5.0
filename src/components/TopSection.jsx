import React, { useEffect, useState } from 'react'
import LogoSequence from './LogoSequence'

const TopSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const fadeEnd = window.innerHeight * 0.6 // how far to scroll before fully faded
      const progress = Math.min(scrollY / fadeEnd, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Control opacity and zoom
  const opacity = 1 - scrollProgress
  const scale = 1 + scrollProgress * 0.3 // zoom out (grow up to 1.3x)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074314/bgTop_uwvnuy.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LogoSequence />

      {/* Baddie image: zoom out (scale up) + fade out */}
      <img
        src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074315/girlBack_rwm1u7.png"
        alt="Baddie"
        className="hero-section-img"
        style={{
          position: 'absolute',
          bottom: 0,
          inset: 0,
          margin: 'auto',
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s linear, transform 0.1s ease-out',
          transformOrigin: 'center bottom',
          zIndex: 16,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />

      <div className='absolute inset-0 flex items-center flex-col justify-between px-auto'>
        <div
          id='zairzest'
          className='absolute text-[35vw] sm:text-[230px] top-0 w-full text-center z-10 lg:text-[360px] md:text-[280px] xl:text-[420px]'
        >
          ZAIRZEST
        </div>

        <div
          id='zairzestunfill'
          className='absolute text-[35vw] sm:text-[230px] top-0 w-full text-center z-20 md:text-[280px] lg:text-[360px] xl:text-[420px]'
        >
          ZAIRZEST
        </div>

        <div
          id='fivebelow'
          className='absolute text-[80px] top-[calc(35vw+30px)] md:top-[calc(230px+90px)] right-2 sm:right-16 lg:hidden z-20'
        >
          v.fiv<span className='text-red-500'>5</span>
        </div>

        <div
          id="topb"
          className='flex flex-col-reverse lg:flex-row absolute top-3/4 left-0 right-0 justify-center gap-40 items-center z-30'
        >
          <div
            id="yap"
            className='text-left text-white w-[330px] md:w-[430px] backdrop-blur-2xl z-30 border-1 border-white/40 p-3 rounded-xl'
          >
            The blueprints burned. Yet the grid hums, the circuits breathe, and the execution never halts. What remains are echoes, recursive loops of will and logic, ghosts of commands that refuse to fade. The Code still runs.
            <span className='bg-white text-red-500'>
              <br />
              Scroll to Join The Echo
            </span>
          </div>

          <div id='five' className='hidden lg:block text-[80px] z-30'>
            v.fiv<span className='text-red-500'>5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection
