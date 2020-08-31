import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from 'firebase.utils';
import CartItemData from 'interfaces/ShopItemData.interface';

export interface UserState {
  isAuth: boolean;
  shoppingCart: CartItemData[];
}

const defaultState: UserState = {
  isAuth: false,
  shoppingCart: [],
};

const UserContext = createContext(defaultState);

export default UserContext;

export const UserProvider: React.FC = (props) => {
  const [isAuth, setIsAuth] = useState(auth.currentUser !== null);
  const [shoppingCart, setShoppingCart] = useState([])
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (userAuth) => {
      console.log('user auth: ', userAuth);
      setIsAuth(userAuth !== null);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <UserContext.Provider value={{ isAuth, shoppingCart }}>
      {props.children}
    </UserContext.Provider>
  );
};
