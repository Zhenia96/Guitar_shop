const calculatePriceWithoutDiscount = (products) => {
  const price = products.reduce((acc, item) => acc + (item.count * item.price), 0);
  return price;
};

export {
  calculatePriceWithoutDiscount,
};
