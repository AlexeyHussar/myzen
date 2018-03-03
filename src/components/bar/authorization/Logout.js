import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const Logout = ({ handleLogout }) => (
  <FlatButton label='Logout'
    onClick={ () => handleLogout() }
  />
);
