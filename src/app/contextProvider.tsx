import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState} from "react";
import {Product} from "types";

interface IContext {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

interface IProviderProps {
  children: ReactNode;
}

const Context = createContext<IContext>({} as IContext);

export const AppProvider = ({ children }: IProviderProps) => {
  const [cart, setCart] = useState<Product[] | []>([]);

  useEffect(() => console.log(cart), [cart])

  const value = useMemo(() => ({cart, setCart}), [cart, setCart]);

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

export const useAppContext = () => useContext(Context);
