import {Cart, Product} from "types";

export const addGood = (cart: Cart, product: Product, setCart: (cart: Cart) => void) => {
  const newCart = {...cart};
  const good = newCart[product.id];

  if (good) {
    good.amount += 1;
    setCart(newCart);
  } else {
    setCart({...newCart, [String(product.id)]: {
        product,
        amount: 1
      }});
  }
};
