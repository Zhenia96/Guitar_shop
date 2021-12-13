import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainFooter from '../main-footer/main-footer';
import MainHeader from '../main-header/main-header';
import Catalog from '../catalog/catalog';
import Basket from '../basket/basket';
import Popups from '../popups/popups';
import { Path } from '../../constants';
import './app.scss';

const App = () => (
  <>
    <div className='page'>
      <MainHeader />
      <Routes>
        <Route
          exact
          path={Path.CATALOG}
          element={
            <Catalog />
          }
        />
        <Route
          exact
          path={Path.BASKET}
          element={
            <Basket />
          }
        />
        <Route
          path='/'
          element={<Navigate replace to={Path.CATALOG} />}
        />
      </Routes>
      <MainFooter className='page__footer' />
    </div>
    <Popups />
  </>
);

export default App;
