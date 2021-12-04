import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './main-menu/main-menu';
import { page } from '../../constants';
import LogoImage from '../../img/main-header/logo-black.svg';
import LocationIcon from '../../img/main-header/icons/location-icon.svg';
import SearchIcon from '../../img/main-header/icons/search-icon.svg';
import BasketIcon from '../../img/main-header/icons/basket-icon.svg';
import './main-header.scss';

const MainHeader = () => (
  <header className='main-header'>
    <nav className='main-header__navigation wrapper'>
      <a className='main-header__logo' href='/#'>
        <img className='main-header__logo-image' src={LogoImage} alt='Логотип Guitar shop' width='67' height='70' />
      </a>
      <MainMenu className='main-header__main-menu' />
      <ul className='main-header__user-menu'>
        <li>
          <a className='main-header__user-menu-link' href='/#'>
            <img className='main-header__user-menu-icon' src={LocationIcon} alt='Местоположение' width='14' height='16' />
          </a>
        </li>
        <li>
          <a className='main-header__user-menu-link' href='/#'>
            <img className='main-header__user-menu-icon' src={SearchIcon} alt='Поиск' width='14' height='14' />
          </a>
        </li>
        <li>
          <Link className='main-header__user-menu-link' to={page.basket.path}>
            <img className='main-header__user-menu-icon' src={BasketIcon} alt='Корзина товаров' width='16' height='18' />
            <sup className='main-header__products-count'>2</sup>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;