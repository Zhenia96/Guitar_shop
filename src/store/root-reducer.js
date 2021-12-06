import { combineReducers } from 'redux';
import { NameSpace } from '../constants';
import productsReducer from './products/products-reducer';

const rootReducer = combineReducers({
  [NameSpace.PRODUCTS]: productsReducer,
});

export default rootReducer;
