import React from 'react';
import frame from '../../../assets/images/logos/Frame.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className=' custom-shape-divider-bottom bg-primary pt-16'>
      <div className='flex sm:flex-col md:flex-row items-center justify-between px-72'>
        <div className=''>
          <h2 className='text-5xl font-bold'>
            Let's Grow Your Brand <p className='mt-5 mb-4'>To The Next Level</p>
          </h2>
          <p className='mb-5'>
            If you want to grow you business or brand, you are the right place. We are provide
            <br /> professional web service. Our services or products is very unique. We provide many
            <br /> kind of services like web design, graphic design, and web development. By our
            <br /> services we can grow and increase your revenue easily.
          </p>
          <PrimaryButton>Hire Us</PrimaryButton>
        </div>
        <div>
          <img className='w-[39rem]' src={frame} alt='' />
        </div>
      </div>
      <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
        <path
          d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
          className='shape-fill'
        ></path>
      </svg>
    </div>
  );
};

export default HomeBanner;
