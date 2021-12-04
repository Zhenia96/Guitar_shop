import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { page } from '../../../constants';
import './main-menu.scss';

const MainMenu = ({ className }) => (
  <ul className={`${className} main-menu`}>
    <li><Link className='main-menu__link' to={page.catalog.path}>Каталог</Link></li>
    <li><a className='main-menu__link' href='/#'>Где купить?</a></li>
    <li><a className='main-menu__link' href='/#'>О компании</a></li>
    <li><a className='main-menu__link' href='/#'>Cервис-центры</a></li>
  </ul>
);

MainMenu.propTypes = {
  className: PropTypes.string,
};

MainMenu.defaultProps = {
  className: '',
};

export default MainMenu;
