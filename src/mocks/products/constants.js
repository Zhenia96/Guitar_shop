import acousticGuitarPicture from '../../img/guitars/acoustic-guitar.png';
import acousticGuitarSmallPicture from '../../img/guitars/acoustic-guitar-small.png';
import electricGuitarPicture from '../../img/guitars/electric-guitar.png';
import electricGuitarSmallPicture from '../../img/guitars/electric-guitar-small.png';
import ukulelePicture from '../../img/guitars/ukulele.png';
import ukuleleSmallPicture from '../../img/guitars/ukulele-small.png';

const guitarNames = ['Честер', 'CURT', 'ROMAN', 'ВИОЛАНА'];

const Price = {
  MIN: 1000,
  MAX: 30000,
};

const Rating = {
  MIN: 1,
  MAX: 5,
};

const Popularity = {
  MIN: 1,
  MAX: 99,
};

const VendorCodeSize = {
  MIN: 100000,
  MAX: 999999,
};

const availableGuitarStringCount = {
  acoustic: [6, 7, 12],
  electric: [4, 6, 7],
  ukulele: [4],
};

const guitarPictures = {
  acoustic: {
    normal: acousticGuitarPicture,
    small: acousticGuitarSmallPicture,
  },
  electric: {
    normal: electricGuitarPicture,
    small: electricGuitarSmallPicture,
  },
  ukulele: {
    normal: ukulelePicture,
    small: ukuleleSmallPicture,
  },
};

export {
  Price,
  Rating,
  Popularity,
  VendorCodeSize,
  availableGuitarStringCount,
  guitarNames,
  guitarPictures,
};
