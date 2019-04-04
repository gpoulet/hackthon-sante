import { combineReducers } from 'redux';
import users from './users';
import parkours from './parkours';

const store = combineReducers({
  users,
  parkours
});

export default store;