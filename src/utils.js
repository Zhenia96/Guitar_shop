const addSpaceBetweenThousands = (number) => {
  const reversedNumber = number.toString().split('').reverse();
  const reversedNumberWithSpace = reversedNumber.map((item, index) => ((index + 1) % 3 === 0
    ? ` ${item}`
    : item));
  return reversedNumberWithSpace.reverse().join('');
};

const getProductsCount = (products) => products.reduce((acc, item) => acc + item.count, 0);

export {
  addSpaceBetweenThousands,
  getProductsCount,
};
