import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setDiscount, applyPromoCode } from '../../../../store/action';
import { getPromoCode } from '../../../../store/basket/selectors';
import { getDiscount } from './utils';
import './promo-code.scss';

const PromoCode = ({ className, price }) => {
  const [promoCode, setPromoCode] = useState('');
  const [message, setMessage] = useState(null);

  const messageTimerIndex = useRef();
  const appliedPromoCode = useSelector(getPromoCode);
  const dispatch = useDispatch();

  const handlePromoCodeFieldInput = (evt) => {
    setPromoCode(evt.target.value);
  };

  useEffect(() => {
    const discount = getDiscount(appliedPromoCode, price);
    if (appliedPromoCode && !discount.isValid) {
      setPromoCode('');
      setMessage(discount.message);
    }
    if (appliedPromoCode && discount.isValid) {
      dispatch(setDiscount(discount.value));
    }
  }, [price]);

  useEffect(() => {
    messageTimerIndex.current = setTimeout(() => {
      setMessage(null);
    }, 2000);
    return () => {
      clearTimeout(messageTimerIndex);
    };
  }, [message]);

  const handleApplyButtonClick = () => {
    const discount = getDiscount(promoCode, price);

    if (discount.isValid) {
      dispatch(applyPromoCode(promoCode));
      dispatch(setDiscount(discount.value));
    } else {
      setMessage(discount.message);
    }
  };

  return (
    <section className={`promo-code ${className}`}>
      <h2 className='promo-code__title'>Промокод на скидку</h2>
      <label className='promo-code__field-label' htmlFor='promo-code-field'>Введите свой промокод, если он у вас есть.</label>
      <div className='promo-code__button-container'>
        <input
          onInput={handlePromoCodeFieldInput}
          className='promo-code__field'
          type='text'
          id='promo-code-field'
          name='promo-code'
          value={promoCode}
        />
        <button onClick={handleApplyButtonClick} className='promo-code__apply-button' type='button'>Применить купон</button>
        <p className={`promo-code__message ${message ? 'promo-code__message--active' : ''}`}>{message}</p>
      </div>
    </section>
  );
};

PromoCode.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number.isRequired,
};

PromoCode.defaultProps = {
  className: '',
};

export default React.memo(PromoCode);
