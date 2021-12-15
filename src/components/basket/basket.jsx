import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import BasketCard from './components/basket-card/basket-card';
import PromoCode from './components/promo-code/promo-code';

import { getBasketProducts, getDiscount } from '../../store/basket/selectors';
import { addSpaceBetweenThousands } from '../../utils';
import { calculatePriceWithoutDiscount } from './utils';

import './basket.scss';

const Basket = () => {
  const products = useSelector(getBasketProducts);
  const discount = useSelector(getDiscount);

  const priceWithoutDiscount = useMemo(() => (products.length
    ? calculatePriceWithoutDiscount(products)
    : 0), [products]);

  return (
    <main className='basket'>
      <div className='wrapper'>
        <h1 className='basket__title'>Корзина</h1>
        <Breadcrumbs className='basket__breadcrumbs' />
        <div className='basket__grid'>
          {
            products.length
              ? (
                <>
                  <ul className='basket__products'>
                    {

                      products.map((product, index) => (
                        <li className='basket__product-container' key={product.vendorCode}>
                          <BasketCard product={product} index={index} />
                        </li>
                      ))
                    }
                  </ul>
                  <PromoCode className='basket__promo-code' price={priceWithoutDiscount} />
                  <p className='basket__total-price'>{`Всего: ${addSpaceBetweenThousands(Math.floor(priceWithoutDiscount - discount))} ₽ `}</p>
                  <a className='basket__checkout-button' href='/#'>Оформить заказ</a>
                </>
              )
              : ''
          }
        </div>
      </div>
    </main>
  );
};

export default Basket;
