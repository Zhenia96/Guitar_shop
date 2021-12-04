import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { page } from '../../../constants';
import LocationIcon from '../../../img/main-header/icons/location-icon.svg';
import SearchIcon from '../../../img/main-header/icons/search-icon.svg';
import BasketIcon from '../../../img/main-header/icons/basket-icon.svg';
import './user-menu.scss';

const UserMenu = ({ className }) => (
  <ul className={`${className} user-menu`}>
    <li>
      <a className='user-menu__link' href='/#'>
        <img className='user-menu__icon' src={LocationIcon} alt='Местоположение' width='14' height='16' />
      </a>
    </li>
    <li>
      <a className='user-menu__link' href='/#'>
        <img className='user-menu__icon' src={SearchIcon} alt='Поиск' width='14' height='14' />
      </a>
    </li>
    <li>
      <Link className='user-menu__link' to={page.basket.path}>
        <img className='user-menu__icon' src={BasketIcon} alt='Корзина товаров' width='16' height='18' />
        <sup className='user-menu__products-count'>2</sup>
      </Link>
    </li>
  </ul>
);

UserMenu.propTypes = {
  className: PropTypes.string,
};

UserMenu.defaultProps = {
  className: '',
};

export default UserMenu;
