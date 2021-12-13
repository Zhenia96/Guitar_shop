import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PopupTemplate from '../popup-template/popup-template';
import { deleteProduct } from '../../../../store/action';
import { getPopupOptions } from '../../../../store/popups/selectors';
import { addSpaceBetweenThousands } from '../../../../utils';
import './popup-delete.scss';

const PopupDelete = ({ onClose }) => {
  const dispatch = useDispatch();
  const product = useSelector(getPopupOptions);

  const handleDeleteButtonClick = () => {
    dispatch(deleteProduct(product.vendorCode));
    onClose();
  };

  const handleContinueButtonClick = () => {
    onClose();
  };

  return (
    <PopupTemplate onClose={onClose}>
      <section className='popup-delete'>
        <h3 className='popup-delete__title'>Удалить этот товар? </h3>
        <div className='popup-delete__container'>
          <img className='popup-delete__picture' src={product.picture.small} alt='Очень мощьная гитара' width={63} height={142} />
          <div className='popup-delete__info'>
            <p className='popup-delete__text popup-delete__text--name'>{`Гитара ${product.name}`}</p>
            <p className='popup-delete__text'>{`Артикул: ${product.vendorСode}`}</p>
            <p className='popup-delete__text'>{`${product.type}, ${product.stringCount} струнная`}</p>
            <p className='popup-delete__text popup-delete__text--price'>{`Цена: ${addSpaceBetweenThousands(product.price)} ₽`}</p>
          </div>
          <div className='popup-delete__button-container'>
            <button onClick={handleDeleteButtonClick} className='popup-delete__button popup-delete__button--delete' type='button'>Удалить товар</button>
            <button onClick={handleContinueButtonClick} className='popup-delete__button popup-delete__button--continue' type='button'>Продолжить покупки</button>
          </div>
        </div>
      </section>
    </PopupTemplate>
  );
};

PopupDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupDelete;
