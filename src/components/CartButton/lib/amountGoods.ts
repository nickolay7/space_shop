import {Cart} from "types";

export const amountGoods = (cart: Cart) => {
  const keys = Object.keys(cart);

  return keys.reduce((acc: number, key: string) => {
    return acc + cart[key].amount;
  }, 0);
};
