import React from 'react';
import Social from './social/social';
import Menu from './menu/menu';
import logo from '../../img/main-footer/logo-white.svg';
import './main-footer.scss';

const MainFooter = () => (
  <footer className='main-footer'>
    <div className='wrapper main-footer__grid'>
      <a className='main-footer__logo' href='/#'>
        <img src={logo} alt='Логотип Guitar shop' />
      </a>
      <Social className='main-footer__social' />
      <Menu className='main-footer__menu' />
    </div>
  </footer>
);

export default MainFooter;
