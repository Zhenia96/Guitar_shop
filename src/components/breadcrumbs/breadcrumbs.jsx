import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { breadcrumbsSettings } from './constants';
import { getDirectoriesFromPath } from './utils';

import './breadcrumbs.scss';

const Breadcrumbs = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <ul className={`${className} breadcrumbs`}>
      <li className='breadcrumbs__item'>
        <a className='breadcrumbs__link' href='/#'>Главная</a>
      </li>
      {getDirectoriesFromPath(pathname).map((currentDir) => {
        const settings = breadcrumbsSettings.find(({ directory }) => directory === currentDir);

        return settings
          ? (
            <li key={settings.path} className='breadcrumbs__item'>
              <Link className='breadcrumbs__link' to={settings.path}>{settings.name}</Link>
            </li>
          )
          : null;
      })}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  className: '',
};

export default Breadcrumbs;
