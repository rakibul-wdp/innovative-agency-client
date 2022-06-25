import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
  const [services] = useServices();
  return (
    <section className='px-72 my-24'>
      <h2 className='text-3xl font-bold text-center'>
        Provide Awesome <span className='text-accent'>Services</span>
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
