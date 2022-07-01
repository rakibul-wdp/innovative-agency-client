import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Feedback from '../Feedback/Feedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import PopularBrand from '../PopularBrand/PopularBrand';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <PopularBrand />
      <Services />
      <Works />
      <Feedback />
      <ContactUs />
    </div>
  );
};

export default Home;
