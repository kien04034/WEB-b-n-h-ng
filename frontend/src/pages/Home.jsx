<<<<<<< Updated upstream
import React from 'react'
import Hero from '../components/Hero'
import LatesCollection from '../components/LatesCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OutPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatesCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <Footer />
    </div>
  )
=======
import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
    return (
        <div>
            {/* <Hero /> */}
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    );
>>>>>>> Stashed changes
}

export default Home;