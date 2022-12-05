import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Product} from "types";
import products from "seeders/products";

export const useGetProduct = (): [Product | null, Dispatch<SetStateAction<Product | null>>] => {
  const [item, setItem] = useState<Product | null>(null);

  const navigate = useNavigate();
  const {productAlias} = useParams();

  useEffect(() => {
    const product = products.find(({alias}) => alias === productAlias);

    product ? setItem(product) : navigate('/')
  }, [navigate, productAlias]);

  return [item, setItem];
}
