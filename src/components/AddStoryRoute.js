import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AddStoryRoute = ({ component: Component, isLogged, ...rest }) =>  (
  <Route { ...rest } render={(props) => (
    isLogged === true 
      ? <Component { ...props } />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

export default withRouter(connect(
  state => ({ isLogged: state.isLogged }),
  null,
  null,
  { pure: false }
)(AddStoryRoute));