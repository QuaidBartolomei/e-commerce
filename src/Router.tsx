import AddItem from 'pages/AddItem.page';
import Checkout from 'pages/Checkout/Checkout.page';
import Directory from 'pages/Directory/Directory';
import ItemDetails from 'pages/ItemDetails/ItemDetails';
import Shop from 'pages/Shop/Shop';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart.page';
import SignInPage from 'pages/SignIn/SignInPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export enum Routes {
  Homepage = '/',
  Shop = '/hats',
  SignIn = '/signin',
  ShoppingCart = '/cart',
  Product = '/products',
  Category = '/category',
  Checkout = '/checkout',
  AddItem = '/add-item'
}

const Router = () => {
  return (
    <Switch>
      <Route exact path={Routes.Homepage} component={Directory} />
      <Route path={Routes.Shop} component={Shop} />
      <Route path={Routes.SignIn} component={SignInPage} />
      <Route path={Routes.ShoppingCart} component={ShoppingCart} />
      <Route path={Routes.Checkout} component={Checkout} />
      <Route path={Routes.AddItem} component={AddItem} />
      <Route path={`${Routes.Product}/:id`} component={ItemDetails} />
    </Switch>
  );
};

export default Router;
