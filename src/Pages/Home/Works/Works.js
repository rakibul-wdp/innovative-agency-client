import React from 'react';
import carouselOne from '../../../assets/images/carousel-1.png';
import carouselTwo from '../../../assets/images/carousel-2.png';
import carouselThree from '../../../assets/images/carousel-3.png';
import carouselFour from '../../../assets/images/carousel-4.png';
import carouselFive from '../../../assets/images/carousel-5.png';

const Works = () => {
  return (
    <div className='px-72 mb-24 bg-[#111430] py-24'>
      <h2 className='text-center text-3xl font-bold text-white'>
        Here are some of <span className='text-accent'>Our Works</span>
      </h2>
      <div className='carousel carousel-center max-w-6xl mx-auto h-96 p-4 space-x-4 bg-[#111430] rounded-box mt-8'>
        <div id='item1' className='carousel-item'>
          <img src={carouselOne} alt='' className='rounded-box' />
        </div>
        <div id='item2' className='carousel-item'>
          <img src={carouselTwo} alt='' className='rounded-box' />
        </div>
        <div id='item3' className='carousel-item'>
          <img src={carouselThree} alt='' className='rounded-box' />
        </div>
        <div id='item4' className='carousel-item'>
          <img src={carouselFour} alt='' className='rounded-box' />
        </div>
        <div id='item5' className='carousel-item'>
          <img src={carouselFive} alt='' className='rounded-box' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1'>
          <div className='badge badge-sm btn-primary'></div>
        </a>
        <a href='#item2'>
          <div className='badge badge-sm btn-primary'></div>
        </a>
        <a href='#item3'>
          <div className='badge badge-sm btn-primary'></div>
        </a>
        <a href='#item4'>
          <div className='badge badge-sm btn-primary'></div>
        </a>
        <a href='#item5'>
          <div className='badge badge-sm btn-primary'></div>
        </a>
      </div>
    </div>
  );
};

export default Works;
