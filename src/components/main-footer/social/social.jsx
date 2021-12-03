import React from 'react';
import PropTypes from 'prop-types';
import facebookIcon from '../../../img/main-footer/icons/facebook-icon.svg';
import instagramIcon from '../../../img/main-footer/icons/instagram-icon.svg';
import twitterIcon from '../../../img/main-footer/icons/twitter-icon.svg';
import './social.scss';

const Social = ({ className }) => (
  <ul className={`${className} social`}>
    <li>
      <a href='/#'>
        <img src={facebookIcon} alt='Мы в фэйсбук' />
      </a>
    </li>
    <li>
      <a href='/#'>
        <img src={instagramIcon} alt='Мы в инстаграме' />
      </a>
    </li>
    <li>
      <a href='/#'>
        <img src={twitterIcon} alt='Мы в твиттере' />
      </a>
    </li>
  </ul>
);

Social.propTypes = {
  className: PropTypes.string,
};

Social.defaultProps = {
  className: '',
};

export default Social;
