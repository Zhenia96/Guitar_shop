import { NameSpace } from '../../constants';

const getInitialProducts = (state) => state[NameSpace.PRODUCTS].initialProducts;

export {
  getInitialProducts,
};
