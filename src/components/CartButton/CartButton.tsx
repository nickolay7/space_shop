import {useAppContext} from "app";
import {amountGoods} from "./lib/amountGoods";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import styles from './CartButton.module.scss';

export const CartButton = () => {
  const { cart } = useAppContext();

  const amount = amountGoods(cart);

  const renderBadge = !!amount && <div className={styles.Badge}>{amount}</div>;

  return (
    <div className={styles.cartButton}>
      {renderBadge}
      <CartIcon />
    </div>
  );
};
