import React from 'react';
import MainMenu from './main-menu/main-menu';
import UserMenu from './user-menu/user-menu';
import LogoImage from '../../img/main-header/logo-black.svg';
import './main-header.scss';

const MainHeader = () => (
  <header className='main-header'>
    <nav className='main-header__navigation wrapper'>
      <a className='main-header__logo' href='/#'>
        <img className='main-header__logo-image' src={LogoImage} alt='Логотип Guitar shop' width='67' height='70' />
      </a>
      <MainMenu className='main-header__main-menu' />
      <UserMenu className='main-header__user-menu' />
    </nav>
  </header>
);

export default MainHeader;
