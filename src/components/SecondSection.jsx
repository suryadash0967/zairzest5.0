import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const SecondSection = () => {
  const [bgImage, setBgImage] = useState('/images/Zenbg.png')

  useEffect(() => {
    // function to set image based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage('/images/zen_bg_phone.png')
      } else {
        setBgImage('/images/Zenbg.png')
      }
    }

    // run once at mount
    handleResize()
    // run whenever screen resizes
    window.addEventListener('resize', handleResize)

    // cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Navbar />
      <div
        className="w-full h-[100vh] text-white relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          id="finger"
          className="flex flex-col lg:flex-row top-1/20 lg:top-2/10 absolute w-full px-20 justify-between items-center"
        >
          <img
            id="biometric"
            src="/images/zenchar.png"
            alt=""
            className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] mb-[2rem] lg:mb-[0]"
          />
          <div id="molde" className="w-[83vw] lg:w-[40vw] text-center lg:text-start">
          The Architect is gone, yet the code runs and the network hums on. In the silence, creations roam free—adapting, probing, almost alive. Then a glitch awakens: wild, unstoppable. YOU are the spark they never saw coming, the force they cannot contain. Step into the unknown, break their perfect system, and turn order upside down. The future won’t wait… and neither should you! Stay tuned—the next move could change everything.
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection
