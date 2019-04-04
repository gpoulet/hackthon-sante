import { combineReducers } from 'redux';
import users from './users';
import parkours from './parkours';
import documents from './documents';


const store = combineReducers({
  users,
  parkours,
  documents
});

export default store;