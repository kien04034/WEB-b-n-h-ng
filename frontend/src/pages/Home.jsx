import React from 'react'
import Hero from '../components/Hero'
import LatesCollection from '../components/LatesCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OutPolicy'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatesCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}

export default Home