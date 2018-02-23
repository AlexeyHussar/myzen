import * as actions from '../actions';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.DISPATCHING_STORIES:
      return {
        ...state,
        stories: action.payload
      };
    case actions.UPDATING_STORY:
      return {
        ...state,
        stories: state.stories
          .map(s => s.id === action.payload.id
            ? action.payload
            : s
          )
      };
    case actions.ERASING_STORY:
      return {
        ...state,
        stories: state.stories
          .filter(s => s.id !== action.payload)
      };
    case actions.CREATING_STORY:
      return {
        ...state,
        stories: [
          action.payload, 
          ...state.stories
        ]
      };
    default:
      return state;
  }
};

// DISPATCHING_STORIES, UPDATING_STORY, ERASING_STORY, CREATING_STORY