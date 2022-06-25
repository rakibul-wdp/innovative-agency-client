import React from 'react';
import './ClientFeedback.css';

const ClientFeedback = ({ review }) => {
  const { name, img, companyAndDesignation, description } = review;
  return (
    <div className='testimonials'>
      <ul>
        <li>
          <img className='border-2 border-gray' src={img} alt='' />
          <p>{description}</p>
          <h1 className='font-bold'>
            <span>{name}</span>
            <br />
            <span className='text-sm ml-3 mt-[-1rem]'>{companyAndDesignation}</span>
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default ClientFeedback;
