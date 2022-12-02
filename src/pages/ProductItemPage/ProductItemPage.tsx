import {Link} from "react-router-dom";
import {useProduct} from "./lib/useProduct";

export const ProductItemPage = () => {
  const [item] = useProduct();

  return (
    <>
      {
        item ? (
          <div className='flex flex-col items-center'>
            <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
            <h1 className='ui-title-1 mb-4'>{item.title}</h1>
            <span>{item.price}</span>

            <div className='flex mt-2'>
              <Link className='ui-button isLink' to='/'>
                Back home
              </Link>
              <div className='ui-button isPrimary'>Add to cart</div>
            </div>
          </div>
        ) : (
          'loading...'
        )
      }
    </>
  )
};
