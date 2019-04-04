import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import users from './users';
import parkours from './parkours';
import documents from './documents';


export default (history) => combineReducers({
  router: connectRouter(history),
  users,
  parkours,
  documents
});
