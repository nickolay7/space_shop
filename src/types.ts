export interface Product {
  id: number,
  alias: string,
  title: string,
  price: string,
  img: string,
}

export interface Good {
  product: Product;
  amount: number;
}

export type Cart = Record<string, Good>;
