import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import user from './user';
import zzims from './zzims';
import modal from './modal';

const rootReducer = combineReducers({
  books,
  auth,
  user,
  zzims,
  modal,
});

export default rootReducer;
