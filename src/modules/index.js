import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import user from './user';
import zzims from './zzims';

const rootReducer = combineReducers({
  books,
  auth,
  user,
  zzims,
});

export default rootReducer;
