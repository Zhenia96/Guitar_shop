import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './popup-template.scss';

const PopupTemplate = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscButtonKeydown = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscButtonKeydown);

    return () => {
      window.removeEventListener('keydown', handleEscButtonKeydown);
    };
  }, [onClose]);

  const handleButtonCloseClick = () => {
    onClose();
  };

  const handlePopupWrapperClick = (evt) => {
    if (evt.target.classList.contains('popup-template')) {
      onClose();
    }
  };

  return (
    <div onClick={handlePopupWrapperClick} className='popup-template popup-template--wrapper'>
      <div className='popup-template__wrapper'>
        {children}
        <button onClick={handleButtonCloseClick} className='popup-template__close-button' type='button' aria-label='Закрыть модальное окно'>+</button>
      </div>
    </div>
  );
};

PopupTemplate.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PopupTemplate;
