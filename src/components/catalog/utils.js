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

const filterProducts = (products, options) => {
  const minPrice = options.firstPriceLimit < options.secondPriceLimit
    ? options.firstPriceLimit
    : options.secondPriceLimit;

  const maxPrice = options.firstPriceLimit > options.secondPriceLimit
    ? options.firstPriceLimit
    : options.secondPriceLimit;

  return products.filter(({ price, type, stringCount }) => {
    if (options.firstPriceLimit !== null && (price < minPrice || price > maxPrice)) {
      return false;
    }
    if (options.availableTypes.length && !options.availableTypes.includes(type)) {
      return false;
    }
    if (options.availableStringCounts.length
      && !options.availableStringCounts.includes(stringCount)) {
      return false;
    }

    return true;
  });
};

export {
  sortProducts,
  filterProducts,
};
