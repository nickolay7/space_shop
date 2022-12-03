import {Link} from "react-router-dom";

import styles from './Cart.module.scss';

interface CartProps { }

export const Cart = ({ }: CartProps) => (
  <div className={styles.cart}>
    Cart Component
    <div className='flex mt-2'>
      <Link className='ui-button isLink' to='/'>
        Back home
      </Link>
      <div className='ui-button isPrimary'>Refresh cart</div>
    </div>
  </div>
);
