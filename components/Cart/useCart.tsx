import React, { createContext, useReducer } from 'react';

type CartState = {
  itemToRemove: string;
};
const initialState: CartState = { itemToRemove: '' };

type Action = { type: 'set_item_to_remove'; payload: string };
type CartDispatch = (action: Action) => void;

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'set_item_to_remove': {
      const itemToRemove = action.payload;
      return {
        ...state,
        itemToRemove,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export const CartProvider: React.FC = props => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {props.children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

function useCartState() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CountProvider');
  }
  return context;
}

export function useCart() {
  const dispatch = useCartDispatch();
  const state = useCartState();
  return { ...state, dispatch };
}
