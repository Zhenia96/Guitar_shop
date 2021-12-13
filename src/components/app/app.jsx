import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainFooter from '../main-footer/main-footer';
import MainHeader from '../main-header/main-header';
import Catalog from '../catalog/catalog';
import Basket from '../basket/basket';
import Popups from '../popups/popups';

import { getPopupType } from '../../store/popups/selectors';
import { Path } from '../../constants';

import './app.scss';

const App = () => {
  const popupType = useSelector(getPopupType);

  return (
    <>
      <div className={`page ${popupType ? 'page--no-scroll' : ''}`}>
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
};

export default App;
