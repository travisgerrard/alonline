import { SET_CURRENT_USER } from './types';
var jwtDecode = require('jwt-decode')

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function login(data) {
  return dispatch => {
    console.log(data);
    return fetch('/api/auth', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => {
      console.log(data);
      const token = data.token;
      localStorage.setItem('jwtToken', token);
      dispatch(setCurrentUser(jwtDecode(token)))
    })
  }
}
