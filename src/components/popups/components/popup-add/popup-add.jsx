import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PopupTemplate from '../popup-template/popup-template';

import { showPopup, addProduct, incrementProductCount } from '../../../../store/action';
import { getPopupOptions } from '../../../../store/popups/selectors';
import { getBasketProducts } from '../../../../store/basket/selectors';
import { PopupType } from '../../../../constants';
import { addSpaceBetweenThousands } from '../../../../utils';

import './popup-add.scss';

const PopupAdd = ({ onClose }) => {
  const dispatch = useDispatch();
  const basketProducts = useSelector(getBasketProducts);
  const product = useSelector(getPopupOptions);

  const handleAddButtonClick = () => {
    const index = basketProducts.findIndex(({ vendorCode }) => product.vendorCode === vendorCode);

    if (index >= 0) {
      dispatch(incrementProductCount(index));
    } else {
      dispatch(addProduct({
        ...product,
        count: 1,
      }));
    }
    dispatch(showPopup({
      type: PopupType.ADDED_SUCCESSFULLY,
    }));
  };

  return (
    <PopupTemplate onClose={onClose}>
      <section className='popup-add'>
        <h3 className='popup-add__title'>Добавить товар в корзину</h3>
        <div className='popup-add__container'>
          <img className='popup-add__picture' src={product.picture.small} alt='Очень мощьная гитара' width={63} height={142} />
          <div className='popup-add__info'>
            <p className='popup-add__text popup-add__text--name'>{`Гитара ${product.name}`}</p>
            <p className='popup-add__text'>{`Артикул: ${product.vendorCode}`}</p>
            <p className='popup-add__text'>{`${product.type}, ${product.stringCount} струнная`}</p>
            <p className='popup-add__text popup-add__text--price'>{`Цена: ${addSpaceBetweenThousands(product.price)} ₽`}</p>
          </div>
          <div className='popup-add__button-container'>
            <button className='popup-add__button-add' onClick={handleAddButtonClick} type='button'>Добавить в корзину</button>
          </div>
        </div>
      </section>
    </PopupTemplate>
  );
};

PopupAdd.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupAdd;
