import { DISPATCHING_STORIES, UPDATING_STORY } from '../actions';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case DISPATCHING_STORIES:
      return {
        ...state,
        stories: action.payload
      };
    case UPDATING_STORY:
      return {
        ...state,
        stories: state.stories
          .map(s => s.id === action.payload.id
            ? action.payload
            : s
          )
      };
    default:
      return state;
  }
};