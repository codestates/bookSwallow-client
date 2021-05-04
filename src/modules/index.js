import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import user from './user';
import zzims from './zzims';
import comments from './comments';

const rootReducer = combineReducers({
  books,
  auth,
  user,
  zzims,
  comments,
});

export default rootReducer;
