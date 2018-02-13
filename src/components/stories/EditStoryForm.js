import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { changeStory } from '../../actions/index';

class EditStoryForm extends Component {

  state = {
    text: this.props.text
  };

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.changeStory(this.props.id, this.state.text);
  };

  render() {

    const { id, editStory } = this.props;

    return (
      <div className='editStoryFormContainer'>
        <form className='primary-form'
          onSubmit={ this.handleSubmit }
        >
          <TextField className='editStoryTextField'
            name='textField'
            multiLine={ true }
            value={ this.state.text }
            fullWidth={ true }
            onChange={ this.handleChange }
          />
          <FlatButton label='Edit' type='submit' />
          <FlatButton label='Cancel' 
            onClick={ () => editStory(id) }
          />
        </form>
      </div>
    );
  };
};

export default connect(
  null,
  { changeStory }
)(EditStoryForm);