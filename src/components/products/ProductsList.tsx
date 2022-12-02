import React from 'react';

import {Product} from "types";
import products from "seeders/products";
import {ProductItem} from "./product";

export const ProductsList = () => {
  const prods: Product[] = products;

  return (
    <div className='flex mt-3 flex-wrap'>
      {prods.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
