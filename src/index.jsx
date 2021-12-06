import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import { initProducts } from './store/action';
import { generateGuitarList } from './mocks/products/products-generator';
import 'normalize.css';
import './css/index.scss';

const products = generateGuitarList(9);

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(initProducts(products));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
