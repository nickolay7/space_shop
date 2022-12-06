import {Link} from "react-router-dom";
import {useGetProduct} from "./lib/useGetProduct";
import {useState} from "react";
import classNames from "classnames";
import {useAppContext} from "app";
import {addGood} from "./lib/addGood";

export const ProductItemPage = () => {
  const [item] = useGetProduct();
  const { cart, setCart } = useAppContext();


  const [isLoading, setLoading] = useState(false);
  const [isAddedSucceed, setAddedSucceed] = useState(false);

  const onAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      item && addGood(cart, item, setCart);
      setAddedSucceed(true);
      setTimeout(() => setAddedSucceed(false), 1000);
    }, 1000);
  }

  const addCartButtonStyle = classNames('ui-button isPrimary', {isLoading});
  const addCartLabel = isLoading ? 'Loading...' : 'Add to cart';

  return (
    <>
      {
        item ? (
          <div className='flex flex-col items-center'>
            <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
            <h1 className='ui-title-1 mb-4'>{item.title}</h1>
            <span>{item.price}</span>
            { isAddedSucceed && <p className='ui-text isSuccess'>Added to cart succeed</p>}
            <div className='flex mt-2'>
              <Link className='ui-button isLink' to='/'>
                Back home
              </Link>
              <div className={addCartButtonStyle} onClick={onAddToCart}>{addCartLabel}</div>
            </div>
          </div>
        ) : (
          'loading...'
        )
      }
    </>
  )
};
