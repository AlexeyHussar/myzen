import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export class Menu extends Component  {

  state = { value : 0};

  handleChange = (evt, index, value) => this.setState({ value });

  render () {
    return (
      <div className='menu-container'>
        <DropDownMenu 
          value={this.state.value} 
          onChange={ this.handleChange }
        >
          <MenuItem value={0} 
            primaryText='Home' 
            containerElement={<Link to='/' />}>
          </MenuItem>
          <MenuItem value={1} 
            primaryText='Stories' 
            containerElement={<Link to='/stories' /> }>
          </MenuItem>
        </DropDownMenu>  
      </div>
    );
  };
};