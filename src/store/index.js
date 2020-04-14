import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import { firestore } from '../plugins/firebase';

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);