import { guitarNames, availableGuitarStringCount, guitarPictures } from './constants';
import { GuitarType } from '../../constants';

const getRandomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (list) => getRandomNumber(0, list.length - 1);

const getName = () => `${guitarNames[getRandomIndex(guitarNames)]} ${getRandomNumber(100, 999)}`;

const getType = () => {
  const guitarTypes = Object.values(GuitarType);
  return guitarTypes[getRandomIndex(guitarTypes)];
};

const getStringCount = (type) => {
  const { acoustic, electric, ukulele } = availableGuitarStringCount;

  switch (type) {
    case GuitarType.ACOUSTIC:
      return acoustic[getRandomIndex(acoustic)];
    case GuitarType.ELECTRIC:
      return electric[getRandomIndex(electric)];
    case GuitarType.UKULELE:
      return ukulele[getRandomIndex(ukulele)];
    default:
      return null;
  }
};

const getPictures = (type) => {
  const { acoustic, electric, ukulele } = guitarPictures;
  switch (type) {
    case GuitarType.ACOUSTIC:
      return acoustic;
    case GuitarType.ELECTRIC:
      return electric;
    case GuitarType.UKULELE:
      return ukulele;
    default:
      return null;
  }
};

export {
  getRandomNumber,
  getName,
  getType,
  getStringCount,
  getPictures,
};
