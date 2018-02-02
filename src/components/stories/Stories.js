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
        { this.props.stories &&
          <ul>
            { this.props.stories.map(story => (
              (story.isEditing === false) 
                ? <li key={ story.id }>
                    <StoryHolder title={ story.title }
                      text={ story.text }
                      editStory={ this.props.editStory }
                    />
                  </li>
                : <h1>Hi</h1>
            )) }
          </ul>
        }
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