const Star = ({ rating, hover, color, star, clickRating, mouseEnter, mouseLeave }) => {
  return (
    <span
      className='star'
      style={{ color: star <= (hover || rating) ? color : '#ccc' }}
      onClick={() => clickRating(star)}
      onMouseEnter={() => mouseEnter(star)}
      onMouseLeave={() => mouseLeave(0)}
    >
      {'\u2605'}
    </span>
  );
};
export default Star;
