import { createStore, combineReducers } from 'redux';
import auth from './reducers/user/userReducer';

export const store = createStore(
  combineReducers({
    auth,
  })
);
