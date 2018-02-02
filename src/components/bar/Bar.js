import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Menu } from './Menu';

export const Bar = () => (
  <AppBar className='appbar' 
    iconElementLeft={<Menu />}
  >
  </AppBar>
);
