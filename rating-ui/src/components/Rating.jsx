import { useState } from 'react';
import Star from './Star';
import Modal from './Modal';

const Rating = ({ header = 'Rating your experience', color = 'gold' }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedback = ['Terrible', 'Poor', 'Fair', 'Good', 'Exellent'];
  const handleSubmit = () => {
    if (rating > 0) setSubmitted(true);
  };
  const handleCloseModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className='rating-container'>
      <h2>{header}</h2>
      <div className='stars'>
        {stars.map((star) => (
          <Star
            key={star}
            hover={hover}
            rating={rating}
            color={color}
            star={star}
            clickRating={setRating}
            mouseEnter={setHover}
            mouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      {rating > 0 && <p className='feedback'>{feedback[rating - 1]}</p>}
      <button
        className='submit-btn'
        disabled={rating === 0}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {submitted && (
        <Modal
          rating={rating}
          clickModal={handleCloseModal}
        />
      )}
    </div>
  );
};
export default Rating;
