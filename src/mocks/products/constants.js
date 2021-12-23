import acousticGuitarPicture from '../../img/guitars/acoustic-guitar.png';
import acousticGuitarSmallPicture from '../../img/guitars/acoustic-guitar-small.png';
import electricGuitarPicture from '../../img/guitars/electric-guitar.png';
import electricGuitarSmallPicture from '../../img/guitars/electric-guitar-small.png';
import ukulelePicture from '../../img/guitars/ukulele.png';
import ukuleleSmallPicture from '../../img/guitars/ukulele-small.png';

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
  guitarPictures,
};
