import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  incrementProductCount,
  decrementProductCount,
  showPopup,
} from '../../../../store/action';
import { PopupType } from '../../../../constants';
import { addSpaceBetweenThousands } from '../../../../utils';
import { basketProductCardType } from '../../../../type-validation';

import './basket-card.scss';

const BasketCard = ({ className, product, index }) => {
  const dispatch = useDispatch();

  const handleIncrementButtonClick = () => {
    dispatch(incrementProductCount(index));
  };

  const handleDecrementButtonClick = () => {
    if (product.count > 1) {
      dispatch(decrementProductCount(index));
    } else {
      dispatch(showPopup({
        type: PopupType.DELETE_PRODUCT,
        options: product,
      }));
    }
  };

  const handleDeleteButtonClick = () => {
    dispatch(showPopup({
      type: PopupType.DELETE_PRODUCT,
      options: product,
    }));
  };

  return (
    <article className={`${className} basket-card`}>
      <div className='basket-card__description'>
        <h3 className='basket-card__title'>{`${product.type} ${product.name}`}</h3>
        <p className='basket-card__text'>{`Артикул: ${product.vendorСode}`}</p>
        <p className='basket-card__text'>{`${product.type}, ${product.stringCount} струнная`}</p>
      </div>
      <img className='basket-card__picture' src={product.picture.small} alt='Просто космическая гитара' width={60} height={136} />
      <p className='basket-card__price'>
        <span className='visually-hidden'>Цена: </span>
        {`${addSpaceBetweenThousands(product.price)} ₽`}
      </p>
      <div className='basket-card__counter'>
        <button onClick={handleDecrementButtonClick} className='basket-card__counter-button' type='button' aria-label='уменьшить количество гитар'>&ndash;</button>
        <span className='basket-card__counter-field'>{product.count}</span>
        <button onClick={handleIncrementButtonClick} className='basket-card__counter-button' type='button' aria-label='увеличить количество гитар'>+</button>
      </div>
      <p className='basket-card__price basket-card__price--total'>
        <span className='visually-hidden'>Сумма: </span>
        {`${addSpaceBetweenThousands(product.price * product.count)} ₽`}
      </p>
      <button onClick={handleDeleteButtonClick} className='basket-card__delete-button' type='button' aria-label='удалить товар'>+</button>
    </article>
  );
};

BasketCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape(basketProductCardType).isRequired,
  index: PropTypes.number.isRequired,
};

BasketCard.defaultProps = {
  className: '',
};

export default React.memo(BasketCard);
