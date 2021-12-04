import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainFooter from '../main-footer/main-footer';
import MainHeader from '../main-header/main-header';
import Catalog from '../catalog/catalog';
import Basket from '../basket/basket';
import { page } from '../../constants';
import './app.scss';

const App = () => (
  <div className='page'>
    <MainHeader />
    <Routes>
      <Route
        exact
        path={page.catalog.path}
        element={
          <Catalog />
        }
      />
      <Route
        exact
        path={page.basket.path}
        element={
          <Basket />
        }
      />
    </Routes>
    <MainFooter className='page__footer' />
  </div>
);

export default App;
