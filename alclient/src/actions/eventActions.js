
import { setHeaders } from '../utils/setHeaders';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log(response);
    let error = {};
    error.response = response;
    throw error;
  }
}

export function createEvent(event) {
  return dispatch => {
    return fetch('/api/events', {
      method: 'post',
      body: JSON.stringify(event),
      headers: setHeaders({
        "Content-Type": "application/json"
      })
    }).then(handleResponse)
    .then(data => {
      console.log(data);
    })
  }
}
