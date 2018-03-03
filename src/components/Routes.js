import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Stories from './stories/Stories';
import AddStory from './stories/AddStory';
import Login from './bar/authorization/Login';
import AddStoryRoute from './AddStoryRoute';


export const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <AddStoryRoute path='/stories/add' component={ AddStory } />
    <Route path='/stories' component={ Stories } />    
    <Route path='/login' component={ Login } />
  </Switch>
);

