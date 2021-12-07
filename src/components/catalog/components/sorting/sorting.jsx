import React from 'react';
import PropTypes from 'prop-types';
import './sorting.scss';

const Sorting = ({ className }) => (
  <section className={`${className} sorting`}>
    <h2 className='visually-hidden'>Сортировка</h2>
    <p className='sorting__text'>Сортировать:</p>
    <p className='sorting__categories-container'>
      <input className='sorting__radio visually-hidden' type='radio' id='price' name='category' value='price' />
      <label className='sorting__category' htmlFor='price'>по цене</label>

      <input className='sorting__radio visually-hidden' type='radio' id='popularity' name='category' value='popularity' />
      <label className='sorting__category' htmlFor='popularity'>по популярности</label>
    </p>
    <p className='sorting__priority-container'>
      <input className='sorting__radio visually-hidden' type='radio' id='ascending' name='priority' value='ascending' />
      <label className='sorting__priority' htmlFor='ascending'>
        <span className='visually-hidden'>По возрастанию</span>
        <svg className='sorting__triangle' width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M.58 10.67h12.84L7 .58.58 10.67Z' />
        </svg>
      </label>

      <input className='sorting__radio visually-hidden' type='radio' id='descending' name='priority' value='descending' />
      <label className='sorting__priority' htmlFor='descending'>
        <span className='visually-hidden'>По убыванию</span>
        <svg className='sorting__triangle sorting__triangle--descending' width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M.58 10.67h12.84L7 .58.58 10.67Z' />
        </svg>
      </label>
    </p>
  </section>
);

Sorting.propTypes = {
  className: PropTypes.string,
};

Sorting.defaultProps = {
  className: '',
};

export default Sorting;
