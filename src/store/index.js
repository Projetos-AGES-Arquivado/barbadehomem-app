import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import generalReducer from './general/reducer';
import appointmentReducer from './appointment/reducer';

import { auth } from '../plugins/firebase';
import { setLoading } from './general/actions';
import { fetchUser } from './auth/actions';
import * as appointmentService from './appointment/actions';

export const store = createStore(
  combineReducers({
    auth: authReducer,
    general: generalReducer,
    appointment: appointmentReducer,
  }),
  applyMiddleware(thunk)
);

auth.onAuthStateChanged(async user => {
  if (user?.uid) {
    await store.dispatch(fetchUser(user?.uid));
    await store.dispatch(appointmentService.fetchProviders());
    await store.dispatch(appointmentService.fetchAppointments());
  }
  store.dispatch(setLoading(false));
});
