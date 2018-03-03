import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Menu } from './Menu';
import Authorization from './authorization/Authorization';

export const Bar = () => (
  <AppBar className='appbar'
    iconElementLeft={ <Menu /> }
    iconElementRight={ <Authorization /> }
  >
  </AppBar>
);
