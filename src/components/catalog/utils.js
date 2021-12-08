import { SortingCategory, SortingPriority } from './constants';

const sortProducts = (products, options) => {
  switch (options.category) {
    case SortingCategory.PRICE:
      return [...products].sort((firstProduct, secondProduct) => (
        options.priority === SortingPriority.ASCENDING
          ? firstProduct.price - secondProduct.price
          : secondProduct.price - firstProduct.price));
    case SortingCategory.POPULARITY:
      return [...products].sort((firstProduct, secondProduct) => (
        options.priority === SortingPriority.ASCENDING
          ? firstProduct.popularity - secondProduct.popularity
          : secondProduct.popularity - firstProduct.popularity));
    default:
      return products;
  }
};

export {
  sortProducts,
};
