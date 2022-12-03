import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Product} from "types";
import products from "seeders/products";
import {ProductItem} from "./product";

export const ProductsList = () => {
  const prods: Product[] = products;

  return (
    <div>
      <Carousel showArrows autoPlay emulateTouch showThumbs={false}>
        {prods.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};
