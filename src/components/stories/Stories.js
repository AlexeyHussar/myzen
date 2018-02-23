import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';
import { loadStories, editStory, deleteStory } from '../../actions/index';
import { StoryHolder } from './StoryHolder';

class Stories extends Component {

  componentWillMount() {
    this.props.loadStories();
  };

  render() {
    return (
      <div>
        <h1>Stories</h1>
        <FlatButton 
          label='Add another story'
          containerElement={ <Link to='/stories/add' /> }
        />
        <StoryHolder
          stories={ this.props.stories }
          editStory={ this.props.editStory }
          deleteStory={ this.props.deleteStory }
        />        
      </div>
    );
  }

};

export default connect(
  state => ({ 
    stories: state.stories
  }),
  { loadStories, editStory, deleteStory }
)(Stories);