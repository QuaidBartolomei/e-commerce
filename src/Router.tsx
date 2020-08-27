import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Shop from 'pages/Shop/Shop';
import SignIn from 'pages/SignIn/SignInPage';

export enum Routes {
  Homepage = '/',
  Shop = '/hats',
  SignIn = '/signin',
}

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path={Routes.Homepage} component={Homepage} />
        <Route path={Routes.Shop} component={Shop} />
        <Route path={Routes.SignIn} component={SignIn} />
      </Switch>
    </div>
  );
}

export default Router
