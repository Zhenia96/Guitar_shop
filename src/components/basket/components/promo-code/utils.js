import { PromoCodeName, Message, Discount } from './constant';

const calculateDiscount = (promoCode, price) => {
  switch (promoCode) {
    case PromoCodeName.GITARAHIT:
      return price * Discount.GITARAHIT;
    case PromoCodeName.SUPERGITARA:
      return Discount.SUPERGITARA;
    case PromoCodeName.GITARA2020: {
      return price * 0.3 < Discount.GITARA2020
        ? price * 0.3
        : Discount.GITARA2020;
    }
    default:
      return 0;
  }
};

const getDiscount = (promoCode, price) => {
  const discount = calculateDiscount(promoCode, price);
  const priceWithDiscount = price - discount;

  switch (promoCode) {
    case PromoCodeName.GITARAHIT:
      return {
        isValid: true,
        value: discount,
      };
    case PromoCodeName.SUPERGITARA:
      return priceWithDiscount < 0
        ? {
          isValid: false,
          message: Message.LESS_THAN_ZERO,
        }
        : {
          isValid: true,
          value: discount,
        };
    case PromoCodeName.GITARA2020:
      return priceWithDiscount < 0
        ? {
          isValid: false,
          message: Message.LESS_THAN_ZERO,
        }
        : {
          isValid: true,
          value: discount,
        };
    case '': {
      return {
        isValid: false,
        message: null,
      };
    }
    default:
      return {
        isValid: false,
        message: Message.INVALID,
      };
  }
};

export {
  getDiscount,
};
