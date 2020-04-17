import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import generalReducer from './general/reducer';
import { auth } from '../plugins/firebase';
import { setLoading } from './general/actions';
import { fetchUser } from './auth/actions';
import { sleep } from '../helpers';

export const store = createStore(
  combineReducers({
    auth: authReducer,
    general: generalReducer,
  }),
  applyMiddleware(thunk)
);

auth.onAuthStateChanged(async (user) => {
  await sleep(1500);
  if (user?.uid) {
    await store.dispatch(fetchUser(user?.uid));
  }
  store.dispatch(setLoading(false));
});
