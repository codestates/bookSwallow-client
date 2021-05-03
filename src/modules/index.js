import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  books,
  auth,
  user,
});

export default rootReducer;
