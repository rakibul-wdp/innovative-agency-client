import React, { useEffect, useState } from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import './Feedback.css';

const Feedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('feedback.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className='px-72 mb-24'>
      <h2 className='text-3xl text-center font-bold'>
        Clients <span className='text-accent'>Feedback</span>
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
        {reviews.slice(0, 3).map((review) => (
          <ClientFeedback key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
