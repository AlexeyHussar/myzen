import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Stories from './stories/Stories';
import AddStory from './stories/AddStory';
import Login from './bar/authorization/Login';

export const Routes = () => (
  <div className='primary-container'>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/stories/add' component={ AddStory } />
      <Route path='/stories' component={ Stories } />    
      <Route path='/login' component={ Login } />
    </Switch>
  </div>
);

