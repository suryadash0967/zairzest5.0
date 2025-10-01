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
            className="lg:w-[30vw] w-[60vw]"
          />
          <div id="molde" className="w-[80vw] lg:w-[40vw]">
            The Architect is dead but The code still runs, and the network hums
            on ---- a system without Operators..And in the silence left behind,
            a new question has begun to echo through the network: what is our
            purpose now??
            <br />
            <br />
            The Architect's creations are no longer bounded by instruction, they
            move through deserted streets and silent servers, analyzing,
            adapting, almost alive. Every algorithm tests limits, probes for
            power, and edges closer to tipping the fragile balance of control.
            But a glitch awakens—wild, untamed, unstoppable. YOU are the spark
            they never saw coming, the force they cannot contain .So Step into
            the unknown, break their perfect system, and help us turn order
            upside down. The future won’t wait… and neither should you! Stay
            tuned…the next move could change everything.
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection
