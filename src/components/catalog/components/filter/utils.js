import { StringCountsOfType } from './constants';
import { GuitarType } from '../../../../constants';

const removeType = (types, removedType) => {
  const typesWithoutRemovedType = types.filter((type) => type !== removedType);
  return typesWithoutRemovedType;
};

const getStringCountsByTypes = (types) => {
  let availableStringCounts = [];
  types.forEach((type) => {
    switch (type) {
      case GuitarType.ACOUSTIC:
        availableStringCounts = [...availableStringCounts, ...StringCountsOfType.ACOUSTIC];
        break;
      case GuitarType.ELECTRIC:
        availableStringCounts = [...availableStringCounts, ...StringCountsOfType.ELECTRIC];
        break;
      case GuitarType.UKULELE:
        availableStringCounts = [...availableStringCounts, ...StringCountsOfType.UKULELE];
        break;
      default:
        break;
    }
  });

  availableStringCounts = new Set(availableStringCounts);

  return [...availableStringCounts];
};

const getStringCounts = (availableStringCounts, currentStringCounts) => {
  const stringCounts = currentStringCounts.filter((currentStringCount) => {
    const isIncludes = availableStringCounts.includes(currentStringCount);
    return isIncludes;
  });

  return stringCounts;
};

const getAvailableFilters = (products, options) => {
  let minPrice = products[0].price;
  let maxPrice = products[0].price;
  const types = new Set();
  const stringCounts = new Set();

  products.forEach(({ price, type, stringCount }) => {
    if (price < minPrice) {
      minPrice = price;
    }

    if (price > maxPrice) {
      maxPrice = price;
    }

    types.add(type);

    if (!options.availableTypes.length || options.availableTypes.includes(type)) {
      stringCounts.add(stringCount);
    }
  });

  return {
    minPrice,
    maxPrice,
    types: [...types],
    stringCounts: [...stringCounts],
  };
};

export {
  getAvailableFilters,
  getStringCountsByTypes,
  getStringCounts,
  removeType,
};
