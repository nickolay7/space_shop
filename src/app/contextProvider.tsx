import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";
import {Cart} from "types";

interface IContext {
  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;
}

interface IProviderProps {
  children: ReactNode;
}

const Context = createContext<IContext>({} as IContext);

export const AppProvider = ({children}: IProviderProps) => {
  const [cart, setCart] = useState<Cart | {}>({});

  const value = useMemo(() => ({cart, setCart}), [cart, setCart]);

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

export const useAppContext = () => useContext(Context);
