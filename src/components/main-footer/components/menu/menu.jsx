import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const FooterMenu = ({ className }) => (

  <ul className={`${className} footer-menu`}>
    <li className='footer-menu__item footer-menu__item--about'>
      <a className='footer-menu__subtitle' href='/#'>О нас</a>
      <div className='footer-menu__content footer-menu__content--about'>
        <p className='footer-menu__text'>
          Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
        </p>
        <p className='footer-menu__text'>
          Все инструменты проверены, отстроены и доведены до идеала!
        </p>
      </div>
    </li>
    <li className='footer-menu__item footer-menu__item--catalog'>
      <a className='footer-menu__subtitle' href='/#'>Каталог</a>
      <ul className='footer-menu__content footer-menu__content--catalog footer-menu__list'>
        <li><a className='footer-menu__link' href='/#'>Акустические гитары</a></li>
        <li><a className='footer-menu__link' href='/#'>Классические гитары</a></li>
        <li><a className='footer-menu__link' href='/#'>Электрогитары</a></li>
        <li><a className='footer-menu__link' href='/#'>Бас-гитары</a></li>
        <li><a className='footer-menu__link' href='/#'>Укулеле</a></li>
      </ul>
    </li>
    <li className='footer-menu__item footer-menu__item--info'>
      <a className='footer-menu__subtitle' href='/#'>Информация</a>
      <ul className='footer-menu__content footer-menu__content--info footer-menu__list'>
        <li><a className='footer-menu__link' href='/#'>Где купить?</a></li>
        <li><a className='footer-menu__link' href='/#'>Блог</a></li>
        <li><a className='footer-menu__link' href='/#'>Вопрос - ответ</a></li>
        <li><a className='footer-menu__link' href='/#'>Возврат</a></li>
        <li><a className='footer-menu__link' href='/#'>Сервис-центры</a></li>
      </ul>
    </li>
    <li className='footer-menu__item footer-menu__item--contacts'>
      <a className='footer-menu__subtitle' href='/#'>Контакты</a>
      <div className='footer-menu__content footer-menu__content--contacts'>
        <address className='footer-menu__address footer-menu__text'>
          г. Санкт-Петербург,
          <br />
          м. Невский проспект,
          <br />
          ул. Казанская 6.
          <br />
          <span className='footer-menu__phone'>8-812-500-50-50</span>
        </address>

        <p className='footer-menu__text'>
          Режим работы:
          <br />
          <span className='footer-menu__time'>с 11:00 до 20:00,</span>
          <br />
          без выходных.
        </p>
      </div>
    </li>
  </ul>
);

FooterMenu.propTypes = {
  className: PropTypes.string,
};

FooterMenu.defaultProps = {
  className: '',
};

export default FooterMenu;
