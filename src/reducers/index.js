import { combineReducers } from 'redux';
import authedUser from './authedUser';
import modals from './modals';
import questions from './questions';
import users from './users';

export default combineReducers({
  authedUser,
  modals,
  questions,
  users
});
