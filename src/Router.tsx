import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Shop from 'pages/Shop/Shop';
import SignIn from 'pages/SignIn/SignInPage';
import Checkout from 'pages/Checkout/Checkout';

export enum Routes {
  Homepage = '/',
  Shop = '/hats',
  SignIn = '/signin',
  Checkout = '/checkout',
}

const Router = () => {
  return (
      <Switch>
        <Route exact path={Routes.Homepage} component={Homepage} />
        <Route path={Routes.Shop} component={Shop} />
        <Route path={Routes.SignIn} component={SignIn} />
        <Route path={Routes.Checkout} component={Checkout} />
      </Switch>
  );
}

export default Router
