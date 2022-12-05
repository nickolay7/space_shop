import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import styles from './CartButton.module.scss';
import {useAppContext} from "../../app";

export const CartButton = () => {
  const { cart } = useAppContext();

  const badgeRender = !!cart.length && <div className={styles.Badge}>{cart.length}</div>;

  return (
    <div className={styles.cartButton}>
      {badgeRender}
      <CartIcon />
    </div>
  );
}
