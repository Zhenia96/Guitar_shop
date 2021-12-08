const getAvailableFilters = (products, options) => {
  const availableFilters = {
    minPrice: products[0].price,
    maxPrice: products[0].price,
    types: new Set(),
    stringCounts: new Set(),
  };

  products.forEach(({ price, type, stringCount }) => {
    if (price < availableFilters.minPrice) {
      availableFilters.minPrice = price;
    }

    if (price > availableFilters.maxPrice) {
      availableFilters.maxPrice = price;
    }

    availableFilters.types.add(type);

    if (!options.availableTypes.length || options.availableTypes.includes(type)) {
      availableFilters.stringCounts.add(stringCount);
    }
  });

  return availableFilters;
};

export {
  getAvailableFilters,
};
