import { 
  fetchStories, 
  updateStory, 
  eraseStory, 
  createStory 
} from "../lib/storiesHelpers";
export const DISPATCHING_STORIES = 'DISPATCHING_STORIES';
export const UPDATING_STORY = 'UPDATING_STORY';
export const ERASING_STORY = 'ERASING_STORY';
export const CREATING_STORY = 'CREATING_STORY';

const dispatchStories = (stories) => ({
  type: 'DISPATCHING_STORIES',
  payload: stories
});

export const loadStories = () => (dispatch) => {
  fetchStories()
    .then(stories => dispatch(dispatchStories(stories)));
};

const dispatchEditing = (editedStory) => ({
  type: UPDATING_STORY,
  payload: editedStory
});

export const editStory = (id) => (dispatch, getState) => {
  const stories = getState().stories;
  const story = stories.find(s => s.id === id);
  const isEditing = { ...story, isEditing: !story.isEditing };
  updateStory(isEditing)
    .then(editingStory => dispatch(dispatchEditing(editingStory)));
};

export const changeStory = (id, changedText) => (dispatch, getState) => {
  const stories = getState().stories;
  const story = stories.find(s => s.id === id);
  const changed = { 
    ...story,
    isEditing: !story.isEditing,
    text: changedText
  };
  console.log(changed.text);
  updateStory(changed)
    .then(changedStory => dispatch(dispatchEditing(changedStory)));
};

const removeStory = (id) => ({
  type: ERASING_STORY,
  payload: id
});

export const deleteStory = (id) => (dispatch) => {
  eraseStory(id)
    .then(() => dispatch(removeStory(id)));
};

const newStory = (story) => ({
  type: CREATING_STORY,
  payload: story
});

export const addStory = (title, text) => (dispatch) => {
  createStory(title, text)
    .then(story => dispatch(newStory(story)));
};