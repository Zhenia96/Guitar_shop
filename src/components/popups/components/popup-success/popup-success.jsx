import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PopupTemplate from '../popup-template/popup-template';

import { Path } from '../../../../constants';

import './popup-success.scss';

const PopupSuccess = ({ onClose }) => {
  const handleContinueButtonClick = () => {
    onClose();
  };

  const handleToBasketButtonClick = () => {
    onClose();
  };

  return (
    <PopupTemplate onClose={onClose}>
      <section className='popup-success'>
        <h3 className='popup-success__title'>Товар успешно добавлен в корзину</h3>
        <div className='popup-success__button-container'>
          <Link onClick={handleToBasketButtonClick} className='popup-success__button popup-success__button--to-basket' to={Path.BASKET}>Перейти в корзину</Link>
          <button onClick={handleContinueButtonClick} className='popup-success__button popup-success__button--continue' type='button'>Продолжить покупки</button>
        </div>
      </section>
    </PopupTemplate>
  );
};

PopupSuccess.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupSuccess;
