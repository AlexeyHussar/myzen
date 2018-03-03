import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addStory } from '../../actions/index';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddStory extends Component {

  state = {
    title: '',
    text: '',
    isRedirecting: false
  };

  handleTitleChange = (evt) => {
    this.setState({ title: evt.target.value });
  };

  handleTextChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    this.props.addStory(this.state.title, this.state.text);
    this.setState({ isRedirecting: true });
  };

  render() {
    return (
      <div className='add-story-component'>
        <div className='add-story-form-container'>
          <form onSubmit={ this.submitHandler } >
            <label htmlFor="titleField">Title: </label>
            <TextField  className='add-story-text-field' 
              name='titleField'
              fullWidth={ true }
              multiLine={ false }
              value={ this.state.title }
              onChange={ this.handleTitleChange }
            />
            <label htmlFor="textField">Text: </label>
            <TextField className='add-story-text-field'
              name='textField'
              fullWidth={ true }
              multiLine={ true }
              value={ this.state.text }
              onChange={ this.handleTextChange }
            />
            <div className='add-button-container'>
              <FlatButton label='Add' type='submit' className='fltbtn' />
              <FlatButton label='Cancel' className='fltbtn-right'
                containerElement={ <Link to='/stories' /> }
              />
            </div>
          </form>
          { this.state.isRedirecting && (
            <Redirect to='/stories' /> )
          }
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  { addStory }
)(AddStory);
