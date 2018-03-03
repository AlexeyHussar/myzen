import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
//import { Redirect } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { handleLogin, handleLogout } from '../../../actions';

class Login extends Component {

  state = {
    isOpen: true
  };

  handleLoginConfirm = () => {
    this.setState({ isOpen: false });
    this.props.handleLogin();
  };

  handleLoginCancel = () => {
    this.setState({ isOpen: false });
    this.props.handleLogout();
  };
 
  render() {

/*     const { from } = this.props.location.state ||
      { from: { pathname: '/'} };
 */
    const actions = [
      <FlatButton
        label='Login'
        name='login'
        onClick={ this.handleLoginConfirm }
      />,
      <FlatButton
        label='Cancel'
        name='cancel'
        onClick={ this.handleLoginCancel }
      /> 
    ];

/*     if (this.state.isOpen === false) 
      return <Redirect to={ from } />;
 */
    return (
      <div>
        <Dialog
          title='Please, log in'
          actions={ actions }
          onRequestClose={ this.handleLoginCancel }
          open={ this.state.isOpen }
        >
          <TextField hintText='Name' />
          <br/>
          <TextField hintText='Password' />          
        </Dialog>
      </div>
    );
  };
};

export default connect(
  null,
  { handleLogin, handleLogout }
)(Login);