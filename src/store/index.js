import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);
