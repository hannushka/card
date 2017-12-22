import * as types from './actionTypes';
import axios from 'axios';

export function receiveStuff(json) {
  let stuff = json.success ? json.token : json.message;
  console.log(json)
  return {type: types.RECEIVE_STUFF, stuff: stuff};
}

export function fetchStuff() {
  return dispatch => {
    return axios.post('/api/authenticate', {
      password: 'selma'
    })
    .then(json => dispatch(receiveStuff(json.data)));
  };
}
