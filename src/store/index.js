import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import { firestore } from '../plugins/firebase';
import { fetchUser } from './auth/actions';

firestore.auth().onAuthStateChanged(user => {
  console.log('Session ', { user });
  // disparar ação para dizer que carregou
});

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);

firestore.auth().onAuthStateChanged(user => {
  // store.dispatch(fetchUser(user ? user.uid : null));
});

setInterval(() => {
  console.log(store.getState())
}, 1000);
