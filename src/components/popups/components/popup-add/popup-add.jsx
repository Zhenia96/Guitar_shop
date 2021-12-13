import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PopupTemplate from '../popup-template/popup-template';
import { showPopup, addProduct, incrementProductCount } from '../../../../store/action';
import { getPopupOptions } from '../../../../store/popups/selectors';
import { getBasketProducts } from '../../../../store/basket/selectors';
import { addSpaceBetweenThousands } from '../../../../utils';
import { PopupType } from '../../../../constants';
import './popup-add.scss';

const PopupAdd = ({ onClose }) => {
  const dispatch = useDispatch();

  // ЧТОБЫ ВОСПРОИЗВЕСТИ СИТУАЦИЮ НУЖНО ДОБАВЛЯТЬ ОДИН И ТОТ ЖЕ ТОВАР ИЗ КАТАЛОГА

  // basketProducts - массив товаров в корзине(Массив обьектов). Реализован с использованием Redux.
  // Редьюсер находится в src/store/basket.
  const basketProducts = useSelector(getBasketProducts);
  console.log('Список товаров из корзины', basketProducts);

  // Опции для отрисовки попапа. В данном случае это обьект конкретной карточки.
  const product = useSelector(getPopupOptions);
  console.log('Добавляемый продут', product);

  const handleAddButtonClick = () => {
    // Тут я ищу индекс товара в корзине по Артикулу,
    // для того чтобы определить, есть ли уже товар с таким артикулом в
    // корзине.
    // Делаю это для того чтобы в случае если товар уже есть не добавлять новый, а
    // увеличить поле "count" у этого товара на 1.
    const index = basketProducts.findIndex((basketProduct) => {
      console.log('Артикул товара из корзины', basketProduct.vendorСode);
      console.log('Артикул добавляемого товара', product.vendorСode);
      return product.vendorСode === basketProduct.vendorCode;
    });

    // Выводит -1 в случае когда в массиве есть товар с таким же Артикулом как и у
    // добавляемого товара.
    console.log('Индекс', index);

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
            <p className='popup-add__text'>{`Артикул: ${product.vendorСode}`}</p>
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
