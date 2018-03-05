import React from 'react';
import { Story } from './Story';
import  EditStoryForm  from './EditStoryForm';

export const StoryHolder = ({ isLogged, stories, editStory, deleteStory }) => (
  <div className='story-holder'>
    { stories && 
      <ul>
        { stories.map(story => (
          (story.isEditing === false)
            ? <li key={ story.id }>
                <Story
                  isLogged={ isLogged }
                  title={ story.title }
                  text={ story.text }
                  id={ story.id }
                  editStory={ () => editStory(story.id) }
                  deleteStory={ () => deleteStory(story.id) }
                />
              </li>
            : <li key={ story.id}>
                <EditStoryForm
                  text={ story.text }
                  id={ story.id }
                  editStory={ () => editStory(story.id) }
                />
              </li>
        )) }
      </ul>
    }
  </div>
);


