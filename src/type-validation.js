import PropTypes from 'prop-types';

const productCardType = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  stringCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  vendorCode: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    normal: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
  }).isRequired,
};

const basketProductCardType = {
  ...productCardType,
  count: PropTypes.number.isRequired,
};

export {
  productCardType,
  basketProductCardType,
};
