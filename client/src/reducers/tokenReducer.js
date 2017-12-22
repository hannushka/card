import initialState from './initialState';
import {FETCH_TOKEN, RECEIVE_TOKEN} from '../actions/actionTypes';

export default function isLoggedIn(state = initialState.isLoggedIn, action) {
  let newState;
  switch (action.type) {
    case FETCH_TOKEN:
      console.log('FETCH_TOKEN Action')
      return action;
    case RECEIVE_TOKEN:
      newState = action.isLoggedIn;
      console.log('RECEIVE_TOKEN Action')
      return newState;
    default:
      return state;
  }
}
