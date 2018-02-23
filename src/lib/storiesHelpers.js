import { v4 } from 'uuid';
const baseURL = 'http://localhost:8080/stories';

export const fetchStories = () => (
  fetch(baseURL)
    .then(res => res.json())
);

export const updateStory = (story) => (
  fetch(`${ baseURL }/${ story.id }`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(story)
  })
    .then(res => res.json())
);

export const eraseStory = (id) => (
  fetch(`${ baseURL }/${ id }`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
);

export const createStory = (title, text) => (
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id: v4(),
      title,
      text,
      isEditing: false
    })
  })
    .then(res => res.json())
);