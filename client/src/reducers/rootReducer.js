import {combineReducers} from 'redux';
import isLoggedIn from './tokenReducer';

const rootReducer = combineReducers({
  isLoggedIn
});

export default rootReducer;
