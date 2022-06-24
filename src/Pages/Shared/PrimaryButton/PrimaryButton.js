import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary text-lg rounded-3xl px-10 text-white font-bold bg-gradient-to-r from-[#28313B] to-[#485461]'>
      {children}
    </button>
  );
};

export default PrimaryButton;

/*  */
