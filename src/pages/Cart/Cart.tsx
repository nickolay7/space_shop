import {Link} from "react-router-dom";
import {useAppContext} from "app";
import {Container} from "layout/Container";
import {Cart} from "types";

const hasGoods = (cart: Cart) => {
  return !!Object.keys(cart).length;
};

export const CartPage = () => {
  const { cart, setCart } = useAppContext();

  const productStyles = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'var(--ui-g-100)',
    borderRadius: '16px',
  }

  const renderContent =
    cart && hasGoods(cart)
      ? Object.keys(cart).map((key) => {
        const { product: { img, title, price, alias }, amount } = cart[key];

        return (
          <div
            key={key}
            className='flex items-center mb-8'
            style={productStyles}
          >
            <img
              src={img}
              alt={title}
              style={{ maxWidth: '140px' }}
            />
            <div className='flex flex-col items-start'>
              <p className='ui-title-3 mb-2'>{title}</p>
              <p className='mb-4'>Price: {price}</p>
              <p className='mb-4'>Amount: {amount}</p>
              <p className='mb-4'>Sum: {(amount * Number(price.slice(1))).toFixed(2)}$</p>
              <Link to={`/products/${alias}`}>
                <span className='ui-link isPrimary'>See more</span>
              </Link>
            </div>
          </div>
        );
      })
      : 'Cart is empty'

  const renderControls = (
    <div className='flex mb-4'>
      <Link className='ui-button isLink' to='/'>
        Back to home
      </Link>
      {cart && hasGoods(cart) && (
        <div className='ui-button isPrimary' onClick={() => setCart({})}>
          Refresh the cart
        </div>
      )}
    </div>
  );

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>Cart</h1>
        <div className='flex flex-col items-center'>
          {renderControls}
          {renderContent}
        </div>
      </div>
    </Container>
  );
}
