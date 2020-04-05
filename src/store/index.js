import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer';
import { firestore } from '../plugins/firebase';

firestore.auth().onAuthStateChanged(user => {
  console.log({ user });
});

export const store = createStore(
  combineReducers({
    user: userReducer,
  })
);
