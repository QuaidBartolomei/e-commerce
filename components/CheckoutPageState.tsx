import React, { createContext, FC, useContext, useReducer } from 'react';

export type StreetAddress = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  address1: string;
  address2?: string;
  phone: string;
};

type CreditCard = {
  name: string;
  number: string;
  expirationDate: string;
  cvv: number;
};

type State = {
  address?: StreetAddress;
  creditCard?: CreditCard;
};

type Action =
  | { type: 'set_address'; payload: StreetAddress }
  | {
      type: 'set_credit_card';
      payload: CreditCard;
    };
type Dispatch = (action: Action) => void;
const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const itemDetailsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_address': {
      return { ...state, address: action.payload };
    }
    case 'set_credit_card': {
      return { ...state, creditCard: action.payload };
    }
  }
};

export type CheckoutPageStateProps = {
  // props
};

export const CheckoutPageStateProvider: FC<CheckoutPageStateProps> = props => {
  const { children } = props;
  const initialState: State = {
    // initial state
  };
  const [state, dispatch] = useReducer(itemDetailsReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export function useCheckoutPageState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutPageStateState must be used within a UserProvider'
    );
  }
  return context;
}

export function useCheckoutPageDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutPageStateDispatch must be used within a CountProvider'
    );
  }
  return context;
}
