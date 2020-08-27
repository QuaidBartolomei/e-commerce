import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from 'firebase.utils';

export interface UserState {
  isAuth: boolean;
}

const defaultState: UserState = {
  isAuth: false,
};

const UserContext = createContext(defaultState);

export default UserContext;

export const UserProvider: React.FC = (props) => {
  const [isAuth, setIsAuth] = useState(auth.currentUser !== null);
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
    <UserContext.Provider value={{ isAuth }}>
      {props.children}
    </UserContext.Provider>
  );
};
