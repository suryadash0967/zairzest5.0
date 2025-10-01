import React from 'react'
import TopSection from '../components/TopSection'
import Explore from '../components/Explore'
import Legacy from '../components/Legacy'
import SecondSection from '../components/SecondSection'

const HomePage = () => {
  return (
    <>
      <TopSection />
      <SecondSection/>
      <Explore />
      <Legacy />
    </>
  )
}

export default HomePage
