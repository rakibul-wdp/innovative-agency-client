import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className='flex justify-between px-80 py-20 bg-primary'>
      <div>
        <h2 className='text-3xl font-bold mb-7'>
          Let us handle your <br /> project, professionally.
        </h2>
        <p>
          If you need to any specific requirement please contact with <br /> us and tell us what you want. With well{' '}
          <br /> written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.
        </p>
      </div>
      <div className='w-[45%]'>
        <input type='email' placeholder='Your email address' className='input w-full max-w-xl mb-3 rounded-none' />{' '}
        <br />
        <input
          type='name'
          placeholder='Your name / company&#39;s name'
          className='input w-full max-w-xl mb-3 rounded-none'
        />{' '}
        <br />
        <textarea
          rows={'7'}
          className='textarea w-full max-w-xl mb-2 rounded-none'
          placeholder='Your message'
        ></textarea>{' '}
        <br />
        <input
          type='submit'
          value={'Send'}
          className='input max-w-xs text-lg rounded-3xl px-10 text-white font-bold bg-gradient-to-r from-[#28313B] to-[#485461]'
        />
      </div>
    </section>
  );
};

export default ContactUs;
