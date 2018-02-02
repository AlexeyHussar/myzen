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