const Message = {
  INVALID: 'Неверный промокод',
  GITARA2020_DENIED: 'Данная скидка не может составлять более 30% от суммы заказа',
  LESS_THAN_ZERO: 'Итоговая цена не может быть меньше нуля',
};

const PromoCodeName = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

const Discount = {
  GITARAHIT: 0.1,
  SUPERGITARA: 700,
  GITARA2020: 3000,
};

export {
  Message,
  PromoCodeName,
  Discount,
};
