import { createReducer } from '@reduxjs/toolkit';
import { initProducts } from '../action';

const initialState = {
  initialProducts: [],
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(initProducts, (state, action) => {
      state.initialProducts = action.payload;
    });
});

export default productsReducer;
