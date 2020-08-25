import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import Album from 'pages/Album';
import Shop from 'pages/Shop';

interface Props {
  
}

const Router = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Shop} />
      </Switch>
    </div>
  );
}

export default Router
