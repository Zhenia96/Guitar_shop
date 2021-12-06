const page = {
  catalog: {
    path: '/catalog',
    directory: 'catalog',
    name: 'Каталог',
  },
  basket: {
    path: '/catalog/basket',
    directory: 'basket',
    name: 'Оформляем',
  },
};

const GuitarType = {
  ACOUSTIC: 'Акустические гитара',
  ELECTRIC: 'Электрогитара',
  UKULELE: 'Укулеле',
};

const ActionType = {
  INIT_PRODUCTS: 'products/initProducts',
};

const NameSpace = {
  PRODUCTS: 'review',
};

export {
  page,
  GuitarType,
  ActionType,
  NameSpace,
};
