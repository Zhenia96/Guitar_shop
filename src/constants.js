const Path = {
  CATALOG: '/catalog',
  BASKET: '/catalog/basket',
};

const GuitarType = {
  ACOUSTIC: 'Акустические гитара',
  ELECTRIC: 'Электрогитара',
  UKULELE: 'Укулеле',
};

const ActionType = {
  INIT_PRODUCTS: 'products/init-products',
  SHOW_POPUP: 'popups/show-popup',
  CLOSE_POPUP: 'popups/close-popup',
  ADD_PRODUCT: 'basket/add-product',
  DELETE_PRODUCT: 'basket/delete-product',
  INCREMENT_PRODUCT_COUNT: 'basket/increment-product-count',
  DECREMENT_PRODUCT_COUNT: 'basket/decrement-product-count',
  DELETE_ALL_PRODUCTS_OF_TYPE: 'basket/delete-all-products-of-type',
  SET_DISCOUNT: 'basket/set-discount',
  APPLY_PROMO_CODE: 'basket/apply-promo-code',
};

const NameSpace = {
  PRODUCTS: 'review',
  POPUPS: 'popups',
  BASKET: 'basket',
};

const PopupType = {
  ADD_PRODUCT: 'add-product',
  ADDED_SUCCESSFULLY: 'added-successfully',
  DELETE_PRODUCT: 'delete-product',
};

export {
  Path,
  GuitarType,
  ActionType,
  NameSpace,
  PopupType,
};
