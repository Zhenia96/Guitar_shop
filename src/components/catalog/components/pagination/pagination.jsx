import React from 'react';
import PropTypes from 'prop-types';
import { getPaginationOptions } from './utils';
import { SPACE } from './constants';
import './pagination.scss';

const Pagination = ({
  className, currentPage, setCurrentPage, pageCount,
}) => {
  const options = getPaginationOptions(currentPage, pageCount);

  const handlePrevButtonClick = (evt) => {
    evt.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handleNextButtonClick = (evt) => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePageNumberClick = (evt) => {
    evt.preventDefault();
    setCurrentPage(Number(evt.target.textContent));
  };

  return (
    <nav className={`pagination ${className}`}>
      <ul className='pagination__list'>
        {
          options.map((option) => (option === SPACE
            ? (
              <li key={option}>
                <span className='pagination__space'>{option}</span>
              </li>
            ) : (
              <li key={option}>
                <a onClick={handlePageNumberClick} className={`pagination__button pagination__button--page-number ${currentPage === option ? 'pagination__button--active' : ''}`} href='/#'>{option}</a>
              </li>
            )))
        }
        {
          currentPage > 1
            ? (
              <li>
                <a onClick={handlePrevButtonClick} className='pagination__button pagination__button--prev' href='/#'>Назад</a>
              </li>
            )
            : null
        }
        {
          currentPage < pageCount
            ? (
              <li>
                <a onClick={handleNextButtonClick} className='pagination__button pagination__button--next' href='/#'>Далее</a>
              </li>
            )
            : null
        }
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  className: '',
};

export default React.memo(Pagination);
