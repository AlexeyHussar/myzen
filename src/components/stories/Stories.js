import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { loadStories, editStory } from '../../actions/index';
import { StoryHolder } from './StoryHolder';

class Stories extends Component {

  componentWillMount() {
    this.props.loadStories();
  };

  render() {
    return (
      <div>
        <h1>Stories</h1>
        <StoryHolder
          stories={ this.props.stories }
          editStory={ this.props.editStory }
        />        
      </div>
    );
  }

};

export default connect(
  state => ({ 
    stories: state.stories
  }),
  { loadStories, editStory }
)(Stories);