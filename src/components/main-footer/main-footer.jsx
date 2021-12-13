import React from 'react';
import PropTypes from 'prop-types';

import Social from './components/social/social';
import Menu from './components/menu/menu';

import logo from './img/logo-white.svg';

import './main-footer.scss';

const MainFooter = ({ className }) => (
  <footer className={`${className} main-footer`}>
    <div className='wrapper main-footer__grid'>
      <a className='main-footer__logo' href='/#'>
        <img src={logo} alt='Логотип Guitar shop' />
      </a>
      <Social className='main-footer__social' />
      <Menu className='main-footer__menu' />
    </div>
  </footer>
);

MainFooter.propTypes = {
  className: PropTypes.string,
};

MainFooter.defaultProps = {
  className: '',
};

export default MainFooter;
