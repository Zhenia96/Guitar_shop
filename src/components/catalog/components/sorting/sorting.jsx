import React from 'react';
import PropTypes from 'prop-types';
import { setCategory, setPriority } from '../../hooks/use-sorting/actions';
import { SortingCategory, SortingPriority } from '../../constants';
import './sorting.scss';

const Sorting = ({ className, dispatch, options }) => {
  const handleCategoryChange = (evt) => {
    if (options.priority === null) {
      dispatch(setPriority(SortingPriority.ASCENDING));
    }
    dispatch(setCategory(evt.target.value));
  };

  const handlePriorityChange = (evt) => {
    if (options.category === null) {
      dispatch(setCategory(SortingCategory.PRICE));
    }
    dispatch(setPriority(evt.target.value));
  };

  return (
    <section className={`${className} sorting`}>
      <h2 className='visually-hidden'>Сортировка</h2>
      <p className='sorting__text'>Сортировать:</p>
      <p className='sorting__categories-container'>
        <input onChange={handleCategoryChange} className='sorting__radio visually-hidden' type='radio' id='price' name='category' value='price' checked={options.category === SortingCategory.PRICE} />
        <label className='sorting__category' htmlFor='price'>по цене</label>

        <input onChange={handleCategoryChange} className='sorting__radio visually-hidden' type='radio' id='popularity' name='category' value='popularity' checked={options.category === SortingCategory.POPULARITY} />
        <label className='sorting__category' htmlFor='popularity'>по популярности</label>
      </p>
      <p className='sorting__priority-container'>
        <input onChange={handlePriorityChange} className='sorting__radio visually-hidden' type='radio' id='ascending' name='priority' value='ascending' checked={options.priority === SortingPriority.ASCENDING} />
        <label className='sorting__priority' htmlFor='ascending'>
          <span className='visually-hidden'>По возрастанию</span>
          <svg className='sorting__triangle' width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M.58 10.67h12.84L7 .58.58 10.67Z' />
          </svg>
        </label>

        <input onChange={handlePriorityChange} className='sorting__radio visually-hidden' type='radio' id='descending' name='priority' value='descending' checked={options.priority === SortingPriority.DESCENDING} />
        <label className='sorting__priority' htmlFor='descending'>
          <span className='visually-hidden'>По убыванию</span>
          <svg className='sorting__triangle sorting__triangle--descending' width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M.58 10.67h12.84L7 .58.58 10.67Z' />
          </svg>
        </label>
      </p>
    </section>
  );
};

Sorting.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  options: PropTypes.shape({
    category: PropTypes.string,
    priority: PropTypes.string,
  }).isRequired,
};

Sorting.defaultProps = {
  className: '',
};

export default Sorting;
