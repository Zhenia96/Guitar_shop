import { NameSpace } from '../../constants';

const getBasketProducts = (state) => state[NameSpace.BASKET].products;

const getDiscount = (state) => state[NameSpace.BASKET].discount;

const getPromoCode = (state) => state[NameSpace.BASKET].promoCode;

export {
  getBasketProducts,
  getDiscount,
  getPromoCode,
};
