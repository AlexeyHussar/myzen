import React from 'react';
import { Story } from './Story';
import { EditStoryForm } from './EditStoryForm';

export const StoryHolder = ({ title, text, editStory, /*isEditing*/ }) => (
  // isEditing ? 
  //   <EditStoryForm /> :
    <Story title={ title } text={ text } editStory={ editStory } /> 
);

