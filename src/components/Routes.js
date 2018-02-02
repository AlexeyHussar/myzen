import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Stories  from './stories/Stories';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/stories' component={ Stories } />
  </Switch>
);