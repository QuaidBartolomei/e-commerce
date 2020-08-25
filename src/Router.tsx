import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Shop from 'pages/Shop/Shop';
import SignIn from 'pages/SignIn';


const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Shop} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default Router
