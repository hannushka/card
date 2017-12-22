import * as types from './actionTypes';
import axios from 'axios';

export function receiveToken(data) {
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

export function receiveAccess(data) {
  return {type: types.RECEIVE_TOKEN, isLoggedIn: data.success};
}

export function accessCard() {
  return dispatch => {
    let token = sessionStorage.getItem('token');
    return axios.get('/api/card?token=' + token)
    .then(response => dispatch(receiveAccess(response.data)));
  };
}

