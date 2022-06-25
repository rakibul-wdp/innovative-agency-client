import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className='card w-96 bg-base-100 shadow-lg hover:shadow-2xl ease-in-out duration-300 py-8 hover-rotate'>
      <figure>
        <div className='avatar'>
          <div className='w-28 rounded-full rotate-image'>
            <img src={img} alt='' />
          </div>
        </div>
      </figure>
      <div className='card-body'>
        <h2 className='text-2xl font-bold text-center'>{name}</h2>
        <p className='text-center'>{description}</p>
      </div>
    </div>
  );
};

export default Service;
