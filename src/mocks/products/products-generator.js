import {
  getRandomNumber,
  getName,
  getType,
  getStringCount,
  getPictures,
} from './utils';
import {
  Price,
  Rating,
  Popularity,
  VendorCodeSize,
} from './constants';

const generateGuitar = () => {
  const name = getName();
  const type = getType();
  const stringCount = getStringCount(type);
  const price = getRandomNumber(Price.MIN, Price.MAX);
  const rating = getRandomNumber(Rating.MIN, Rating.MAX);
  const popularity = getRandomNumber(Popularity.MIN, Popularity.MAX);
  const vendorСode = `SO${getRandomNumber(VendorCodeSize.MIN, VendorCodeSize.MAX)}`;
  const picture = getPictures(type);

  return {
    name,
    type,
    stringCount,
    price,
    rating,
    popularity,
    vendorСode,
    picture,
  };
};

const generateGuitarList = (listSize) => {
  const guitarList = [];

  for (let i = 1; i <= listSize; i += 1) {
    guitarList.push(generateGuitar());
  }

  return guitarList;
};

export {
  generateGuitar,
  generateGuitarList,
};
