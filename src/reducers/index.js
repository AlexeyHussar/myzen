import {
  DISPATCHING_STORIES,
  UPDATING_STORY, 
  ERASING_STORY, 
  CREATING_STORY,
  HANDLE_LOGOUT,
  HANDLE_LOGIN
} from '../actions';

const initialState = {
  isLogged: false,
  stories: []
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPATCHING_STORIES:
      return {
        ...state,
        stories: action.payload.reverse()
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
    case ERASING_STORY:
      return {
        ...state,
        stories: state.stories
          .filter(s => s.id !== action.payload)
      };
    case CREATING_STORY:
      return {
        ...state,
        stories: [
          action.payload, 
          ...state.stories
        ]
      };
    case HANDLE_LOGIN:
      return {
        ...state,
        isLogged: true
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};
