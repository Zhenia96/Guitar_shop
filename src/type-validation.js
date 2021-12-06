import PropTypes from 'prop-types';

const productCardType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  stringCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  vendorСode: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    normal: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
  }).isRequired,
});

export {
  productCardType,
};
