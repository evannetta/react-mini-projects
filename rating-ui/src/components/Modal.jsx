const Modal = ({ rating, clickModal }) => {
  return (
    <div className='modal-bg'>
      <div className='modal'>
        <p>Thank you</p>
        <p>
          You rated us {rating} star{rating > 1 && 's'}
        </p>
        <button
          className='close-btn'
          onClick={() => clickModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
