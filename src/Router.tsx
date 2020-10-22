import AddItem from 'pages/AddItem.page';
import Checkout from 'pages/Checkout/Checkout.page';
import ItemDetails from 'pages/ItemDetails/ItemDetails.page';
import SearchPage from 'pages/Search.page';
import ItemListPage from 'pages/Shop/ItemListPage';
import Shop from 'pages/Shop/Shop';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart.page';
import SignInPage from 'pages/SignIn/SignIn.page';
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
  AddItem = '/add-item',
  Search = '/search'
}

const Router = () => {
  return (
    <Switch>
      <Route exact path={Routes.Homepage} component={Shop} />
      <Route path={Routes.Shop} component={Shop} />
      <Route path={Routes.SignIn} component={SignInPage} />
      <Route path={Routes.ShoppingCart} component={ShoppingCart} />
      <Route path={Routes.Checkout} component={Checkout} />
      <Route path={Routes.AddItem} component={AddItem} />
      <Route path={`${Routes.Product}/:id`} component={ItemDetails} />
      <Route path={`${Routes.Search}/:query`} component={SearchPage} />
      <Route path={`${Routes.Category}/:category`} component={ItemListPage} />
    </Switch>
  );
};

export function routeToItemPage(id: string): string {
 return Routes.Product + '/' + id;
}

export default Router;
