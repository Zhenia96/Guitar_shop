import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/rating';
import { productCardType } from '../../../../type-validation';
import { addSpaceBetweenThousands } from './utils';
import './catalog-card.scss';

const CatalogCard = ({ className, product }) => {
  const {
    name,
    price,
    rating,
    popularity,
    picture,
  } = product;

  return (
    <article className={`${className} catalog-card`}>
      <div className='catalog-card__row'>
        <h3 className='catalog-card__title'>{name}</h3>
        <span className='catalog-card__price'>
          {`${addSpaceBetweenThousands(price)} `}
          &#8381;
        </span>
      </div>
      <img className='catalog-card__picture' src={picture.normal} alt={`Гитара ${name}`} width='68' height='190' />
      <div className='catalog-card__row'>
        <Rating value={rating} />
        <span className='catalog-card__popularity'>{popularity}</span>
      </div>
      <div className='catalog-card__row'>
        <a className='catalog-card__button catalog-card__button--details' href='/#'>Подробнее</a>
        <a className='catalog-card__button catalog-card__button--buy' href='/#'>Купить</a>
      </div>
    </article>
  );
};

CatalogCard.propTypes = {
  className: PropTypes.string,
  product: productCardType.isRequired,
};

CatalogCard.defaultProps = {
  className: '',
};

export default CatalogCard;
