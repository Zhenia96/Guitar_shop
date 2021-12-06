import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const initProducts = createAction(ActionType.INIT_PRODUCTS, (products) => ({
  payload: products,
}));

export {
  initProducts,
};
