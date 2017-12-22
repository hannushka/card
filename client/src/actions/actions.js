import * as types from './actionTypes';
import axios from 'axios';

export function receiveToken(data) {
  console.log('Received data', data);
  if (data.success) {
    sessionStorage.setItem('token', data.token);
  }
  return {type: types.RECEIVE_TOKEN, isLoggedIn: data.success};
}

export function fetchToken(password) {
  return dispatch => {
    return axios.post('/api/authenticate', {
      password: password
    })
    .then(response => dispatch(receiveToken(response.data)));
  };
}
