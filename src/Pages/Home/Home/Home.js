import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import PopularBrand from '../PopularBrand/PopularBrand';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <PopularBrand />
      <Services />
    </div>
  );
};

export default Home;
