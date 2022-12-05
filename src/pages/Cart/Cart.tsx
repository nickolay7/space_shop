import {Link} from "react-router-dom";
import {useAppContext} from "app";
import {Container} from "../../layout/Container";

export const Cart = () => {
  const { cart, setCart } = useAppContext();

  const productStyles = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'var(--ui-g-100)',
    borderRadius: '16px',
  }

  const renderContent =
    cart && cart.length && cart.length > 0
      ? cart.map((item, i) => (
        <div
          key={i}
          className='flex items-center mb-8'
          style={productStyles}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{ maxWidth: '140px' }}
          />
          <div className='flex flex-col items-start'>
            <p className='ui-title-3 mb-2'>{item.title}</p>
            <p className='mb-4'>{item.price}</p>
            <Link to={`/products/${item.alias}`}>
              <span className='ui-link isPrimary'>See more</span>
            </Link>
          </div>
        </div>
      ))
      : 'Cart is empty'

  const renderControls = (
    <div className='flex mb-4'>
      <Link className='ui-button isLink' to='/'>
        Back to home
      </Link>
      {cart && cart.length > 0 && (
        <div className='ui-button isPrimary' onClick={() => setCart([])}>
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
