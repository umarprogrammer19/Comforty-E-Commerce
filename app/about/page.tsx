import React from 'react'
import AboutHero from '../components/aboutHero'
import AboutSection from '../components/aboutSection'
import AboutPopularProduct from '../components/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page
