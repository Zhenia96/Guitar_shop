import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const initProducts = createAction(ActionType.INIT_PRODUCTS, (products) => ({
  payload: products,
}));

const addProduct = createAction(ActionType.ADD_PRODUCT, (product) => ({
  payload: product,
}));

const incrementProductCount = createAction(ActionType.INCREMENT_PRODUCT_COUNT, (index) => ({
  payload: index,
}));

const decrementProductCount = createAction(ActionType.DECREMENT_PRODUCT_COUNT, (index) => ({
  payload: index,
}));

const deleteProduct = createAction(
  ActionType.DELETE_PRODUCT,
  (vendorCode) => ({
    payload: vendorCode,
  }),
);

const setDiscount = createAction(ActionType.SET_DISCOUNT, (discount) => ({
  payload: discount,
}));

const applyPromoCode = createAction(ActionType.APPLY_PROMO_CODE, (promoCode) => ({
  payload: promoCode,
}));

const showPopup = createAction(ActionType.SHOW_POPUP, (popupOptions) => ({
  payload: popupOptions,
}));

const closePopup = createAction(ActionType.CLOSE_POPUP);

export {
  initProducts,
  addProduct,
  incrementProductCount,
  deleteProduct,
  decrementProductCount,
  setDiscount,
  applyPromoCode,
  showPopup,
  closePopup,
};
