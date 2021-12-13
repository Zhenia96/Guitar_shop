import { combineReducers } from 'redux';
import { NameSpace } from '../constants';
import productsReducer from './products/products-reducer';
import popupsReducer from './popups/popups-reducer';
import basketReducer from './basket/basket-reducer';

const rootReducer = combineReducers({
  [NameSpace.PRODUCTS]: productsReducer,
  [NameSpace.POPUPS]: popupsReducer,
  [NameSpace.BASKET]: basketReducer,
});

export default rootReducer;
