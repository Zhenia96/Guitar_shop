import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Path } from '../../../constants';
import { getProductsCount } from '../../../utils';
import { getBasketProducts } from '../../../store/basket/selectors';
import './user-menu.scss';

const UserMenu = ({ className }) => {
  const products = useSelector(getBasketProducts);

  return (
    <ul className={`${className} user-menu`}>
      <li>
        <a className='user-menu__link' href='/#'>
          <svg className='user-menu__icon user-menu__icon--special' role='img' aria-label='Местоположение' width='14' height='16' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.88 7.35c0 4.46-6 8.27-6 8.27s-6-3.81-6-8.27A5.6 5.6 0 0 1 2.63 3.3a6.15 6.15 0 0 1 4.24-1.67c1.6 0 3.12.6 4.25 1.67a5.6 5.6 0 0 1 1.76 4.05Z' strokeWidth='1.33' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M6.88 9.26c1.1 0 2-.85 2-1.9 0-1.06-.9-1.92-2-1.92-1.11 0-2 .86-2 1.91 0 1.06.89 1.91 2 1.91Z' strokeWidth='1.33' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </a>
      </li>
      <li>
        <a className='user-menu__link' href='/#'>
          <svg className='user-menu__icon' role='img' aria-label='Поиск' width='14' height='14' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='m10.03 9.03 3.76 3.76a.7.7 0 0 1-1 1l-3.76-3.76a5.6 5.6 0 1 1 1-1ZM5.6 9.8a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z' />
          </svg>
        </a>
      </li>
      <li>
        <Link className='user-menu__link' to={Path.BASKET}>
          <svg className='user-menu__icon' role='img' aria-label='Корзина товаров' width='16' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.38 6.6a.52.52 0 0 0-.17-.16.44.44 0 0 0-.21-.05h-3V4.02c0-.47-.16-.92-.44-1.25a1.4 1.4 0 0 0-1.06-.52h-3c-.4 0-.78.19-1.06.52S5 3.55 5 4.02V6.4H2a.44.44 0 0 0-.21.05.52.52 0 0 0-.17.15.63.63 0 0 0-.1.22.7.7 0 0 0-.02.26l.94 7.18c.04.28.16.53.34.72.18.18.42.28.66.28h9.13c.24 0 .47-.1.66-.28.18-.19.3-.44.34-.72l.93-7.18a.7.7 0 0 0-.02-.26.63.63 0 0 0-.1-.22ZM6 4.01c0-.15.05-.3.15-.42.09-.1.22-.17.35-.17h3c.13 0 .26.06.35.17.1.12.15.27.15.42V6.4H6V4.02Zm6.57 10.05H3.43l-.85-6.5h10.83l-.84 6.5Z' />
          </svg>
          <sup className='user-menu__products-count'>{`${products.length ? getProductsCount(products) : ''}`}</sup>
        </Link>
      </li>
    </ul>
  );
};

UserMenu.propTypes = {
  className: PropTypes.string,
};

UserMenu.defaultProps = {
  className: '',
};

export default UserMenu;
