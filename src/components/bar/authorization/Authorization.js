import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { Logout } from './Logout';
import { handleLogout } from '../../../actions';

const Authorization = ({ isLogged, handleLogout }) => (
  <div className='authorization-container'>
    {
      isLogged 
      ? <Logout handleLogout={ handleLogout } /> 
      : <FlatButton label='Login'
          containerElement={ <Link to='/login' /> } />
    }  
  </div>
);

export default connect(
  state => ({ isLogged: state.isLogged }),
  { handleLogout }
)(Authorization);
