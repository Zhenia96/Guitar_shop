import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Rating from '../rating/rating';

import { showPopup } from '../../../../store/action';
import { PopupType, GuitarType } from '../../../../constants';
import { addSpaceBetweenThousands } from '../../../../utils';
import { PictureSize } from './constant';
import { productCardType } from '../../../../type-validation';

import './catalog-card.scss';

const CatalogCard = ({ className, product }) => {
  const {
    name,
    price,
    type,
    rating,
    popularity,
    picture,
  } = product;

  const dispatch = useDispatch();

  const handleBuyButtonClick = (evt) => {
    evt.preventDefault();

    dispatch(showPopup({
      type: PopupType.ADD_PRODUCT,
      options: product,
    }));
  };

  return (
    <article className={`${className} catalog-card ${type !== GuitarType.ELECTRIC ? 'catalog-card--with-small-picture' : ''}`}>
      <div className='catalog-card__row'>
        <h3 className='catalog-card__title'>{name}</h3>
        <span className='catalog-card__price'>
          {`${addSpaceBetweenThousands(price)} `}
          &#8381;
        </span>
      </div>
      <img
        className='catalog-card__picture'
        src={picture.normal}
        alt={`Гитара ${name}`}
        width={type === GuitarType.ELECTRIC ? PictureSize.normal.width : PictureSize.small.width}
        height={type === GuitarType.ELECTRIC ? PictureSize.normal.height : PictureSize.small.height}
      />
      <div className={`catalog-card__row ${type !== GuitarType.ELECTRIC ? 'catalog-card__row--with-small-picture' : ''}`}>
        <Rating value={rating} />
        <span className='catalog-card__popularity'>{popularity}</span>
      </div>
      <div className='catalog-card__row'>
        <a className='catalog-card__button catalog-card__button--details' href='/#'>Подробнее</a>
        <a onClick={handleBuyButtonClick} className='catalog-card__button catalog-card__button--buy' href='/#'>Купить</a>
      </div>
    </article>
  );
};

CatalogCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape(productCardType).isRequired,
};

CatalogCard.defaultProps = {
  className: '',
};

export default CatalogCard;
