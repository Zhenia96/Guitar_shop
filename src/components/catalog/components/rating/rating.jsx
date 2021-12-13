import React from 'react';
import PropTypes from 'prop-types';

import { getPercentageRating } from './utils';

import './rating.scss';

const Rating = ({ className, value }) => (
  <div className={`${className} rating`}>
    <span className='visually-hidden'>{`Рейтинг ${value}`}</span>
    <div className='rating__container'>
      <div className='rating__value' style={{ width: getPercentageRating(value) }} />
    </div>
  </div>
);

Rating.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

Rating.defaultProps = {
  className: '',
  value: 0,
};

export default Rating;
