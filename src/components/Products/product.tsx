import React from 'react';
import {Link} from "react-router-dom";
import {Product} from "types";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product: {alias, title, price, img} }: ProductItemProps) => {

  return (
    <div className='mr-3 mb-3'>
      <div className="flex items-center justify-center">
        <img src={img} alt={alias} style={{maxWidth: "320px"}}/>
        <div className='flex flex-col'>
          <div className='my-3'>
            <span className='ui-title-5'>{title}</span>
          </div>
          <p>{price}</p>
          <Link to={`/products/${alias}`}><button className='ui-button isPrimary mt-1'>See more</button></Link>
        </div>
      </div>
    </div>
  );
};
