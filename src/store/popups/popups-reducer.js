import { createReducer } from '@reduxjs/toolkit';
import { showPopup, closePopup } from '../action';

const initialState = {
  popupType: null,
  popupOptions: null,
};

const popupsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showPopup, (state, { payload }) => {
      state.popupType = payload.type;
      state.popupOptions = payload.options ?? null;
    })
    .addCase(closePopup, (state) => {
      state.popupType = null;
      state.popupOptions = null;
    });
});

export default popupsReducer;
