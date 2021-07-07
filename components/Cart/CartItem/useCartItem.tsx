import React from 'react';
import { PropsWithChildren } from 'react';
import { CartItem } from './CartItem.interface';

const CartItemContext = React.createContext<CartItem | undefined>(undefined);

type Props = PropsWithChildren<{
  value: CartItem;
}>;

function CartItemProvider({ children, value }: Props) {
  return (
    <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
  );
}

function useCartItemContext() {
  const context = React.useContext(CartItemContext);
  if (context === undefined) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
}

export { CartItemProvider, useCartItemContext };
