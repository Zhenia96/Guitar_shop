import React from 'react';
import PropTypes from 'prop-types';

import facebookIcon from './img/facebook-icon.svg';
import instagramIcon from './img/instagram-icon.svg';
import twitterIcon from './img/twitter-icon.svg';

import './social.scss';

const Social = ({ className }) => (
  <ul className={`${className} social`}>
    <li>
      <a href='/#'>
        <img src={facebookIcon} alt='Мы в фэйсбук' width={24} height={25} />
      </a>
    </li>
    <li>
      <a href='/#'>
        <img src={instagramIcon} alt='Мы в инстаграме' width={24} height={25} />
      </a>
    </li>
    <li>
      <a href='/#'>
        <img src={twitterIcon} alt='Мы в твиттере' width={24} height={25} />
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
