import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import { firestore } from '../plugins/firebase';
import { fetchUser } from './auth/actions';

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);
