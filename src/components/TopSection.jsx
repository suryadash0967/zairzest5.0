import React from 'react'

const TopSection = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // or set a specific height if needed
        backgroundImage: 'url(/bgTop.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
        <img src="/girlBack.png" alt="Baddie" className="mx-auto h-[100vh]"/>
    </div>
  )
}

export default TopSection