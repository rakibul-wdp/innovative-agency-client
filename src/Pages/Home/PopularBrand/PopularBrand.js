import React from 'react';
import slack from '../../../assets/images/logos/slack.png';
import google from '../../../assets/images/logos/google.png';
import uber from '../../../assets/images/logos/uber.png';
import netflix from '../../../assets/images/logos/netflix.png';
import airbnb from '../../../assets/images/logos/airbnb.png';

const PopularBrand = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-72 items-center justify-center mt-9'>
      <img className='w-36' src={slack} alt='' />
      <img className='w-36' src={google} alt='' />
      <img className='w-36' src={uber} alt='' />
      <img className='w-36' src={netflix} alt='' />
      <img className='w-36' src={airbnb} alt='' />
    </div>
  );
};

export default PopularBrand;
