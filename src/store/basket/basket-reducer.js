import { createReducer } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  incrementProductCount,
  decrementProductCount,
  setDiscount,
  applyPromoCode,
} from '../action';

const initialState = {
  products: [],
  discount: 0,
  promoCode: null,
};

const basketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, { payload }) => {
      state.products.push(payload);
    })
    .addCase(deleteProduct, (state, { payload }) => {
      const index = state.products.findIndex((product) => product.vendorCode === payload);
      state.products = [...state.products.slice(0, index), ...state.products.slice(index + 1)];
    })
    .addCase(incrementProductCount, (state, { payload }) => {
      state.products[payload].count += 1;
    })
    .addCase(decrementProductCount, (state, { payload }) => {
      state.products[payload].count -= 1;
    })
    .addCase(setDiscount, (state, { payload }) => {
      state.discount = payload;
    })
    .addCase(applyPromoCode, (state, { payload }) => {
      state.promoCode = payload;
    });
});

export default basketReducer;
