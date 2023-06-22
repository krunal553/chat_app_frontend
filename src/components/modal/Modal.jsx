import React, { useEffect, useState } from 'react';
import ProfPic from '../../img/my_prof_pic.webp'
import './Modal.scss'

function Modal({ img }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Add event listener to handle the browser's back button
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = handlePopstate;
  };

  const closeModal = () => {
    setIsOpen(false);
    // Remove event listener when the modal is closed
    window.onpopstate = null;
  };

  const handlePopstate = () => {
    closeModal();
  };

  useEffect(() => {
    // Remove event listener and close modal when the component is unmounted
    return () => {
      window.onpopstate = null;
      closeModal();
    };
  }, []);

  return (
    <div>
      <div className='modal-detail' onClick={openModal}>
        <img src={ProfPic} alt="" />
        <span>krunal</span>
      </div>
      {isOpen && (
        <div className='Modal'>
          {/* <h2>{header}</h2> */}
          {/* <p>{body}</p> */}
          <img src={img} alt="" />
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
