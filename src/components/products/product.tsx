import React from 'react';
import {Link} from "react-router-dom";
import {Product} from "types";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product: {alias, title, price, img} }: ProductItemProps) => {

  return (
    <div className='ui-card mr-3 mb-3 isAnimated'>
      <div className="ui-card-body flex flex-col justify-between">
        <img src={img} alt={alias} style={{maxWidth: "320px"}}/>
        <div className='mx-3 my-3'>
          <span className='ui-title-5'>{title}</span>
        </div>
        <div className='flex items-end justify-between mx-3'>
          <p>{price}</p>
          <Link to={`/products/${alias}`}><button className='ui-button isPrimary'>See more</button></Link>
        </div>
      </div>
    </div>
  );
};
