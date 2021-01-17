
import Checkout from 'pages/Checkout/Checkout.page';
import ItemDetailsPage from 'pages/ItemDetails/ItemDetails.page';
import SearchPage from 'pages/Search.page';
import ItemListPage from 'pages/Shop/ItemListPage';
import Homepage from 'pages/Shop/Homepage';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart.page';
import SignInPage from 'pages/SignIn/SignIn.page';
import UserRegistrationPage from 'pages/UserRegistration.page';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export enum Routes {
  Homepage = '/',
  Shop = '/hats',
  SignIn = '/signin',
  Register = '/register',
  ShoppingCart = '/cart',
  ItemDetails = '/products',
  Category = '/category',
  Checkout = '/checkout',
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={Routes.Homepage} component={Homepage} />
      <Route path={Routes.Shop} component={Homepage} />
      <Route path={Routes.SignIn} component={SignInPage} />
      <Route path={Routes.Register} component={UserRegistrationPage} />
      <Route path={Routes.ShoppingCart} component={ShoppingCart} />
      <Route path={Routes.Checkout} component={Checkout} />
      <Route path={`${Routes.ItemDetails}/:id`} component={ItemDetailsPage} />
      <Route path={`${Routes.ItemDetails}`} component={ItemDetailsPage} />
      <Route path={`${Routes.Category}/:category`} component={ItemListPage} />
    </Switch>
  );
};

export function routeToItemPage(id: string): string {
 return Routes.ItemDetails + '/' + id;
}
export function routeToCategoryPage(id: string): string {
  return Routes.Category + '/' + id;
}

export default AppRouter;
