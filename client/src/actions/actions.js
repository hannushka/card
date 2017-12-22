import * as types from './actionTypes';
import axios from 'axios';

export function receiveToken(data) {
  let token = data.success ? data.token : data.message;
  console.log('Received data', data);
  return {type: types.RECEIVE_TOKEN, isLoggedIn: data.success};
}

export function fetchToken() {
  return dispatch => {
    return axios.post('/api/authenticate', {
      password: 'selma'
    })
    .then(response => dispatch(receiveToken(response.data)));
  };
}
