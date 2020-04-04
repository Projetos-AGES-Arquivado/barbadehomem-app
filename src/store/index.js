import { createStore, combineReducers } from 'redux';
import { authReducer } from './auth/reducer';

export const store = createStore(
  combineReducers({
    auth: authReducer,
  })
);
