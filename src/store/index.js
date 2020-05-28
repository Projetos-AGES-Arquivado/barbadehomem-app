import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import generalReducer from './general/reducer';
import appointmentReducer from './appointment/reducer';
import providerReducer from './provider/reducer';
import serviceReducer from './services/reducer';

import { auth } from '../plugins/firebase';
import { setLoading } from './general/actions';
import { fetchUser } from './auth/actions';
import { fetchAppointments } from './appointment/actions';
import { fetchProviders } from './provider/actions';
import { fetchServices } from './services/actions';

export const store = createStore(
  combineReducers({
    auth: authReducer,
    general: generalReducer,
    appointment: appointmentReducer,
    provider: providerReducer,
    service: serviceReducer,
  }),
  applyMiddleware(thunk)
);

auth.onAuthStateChanged(async user => {
  if (user?.uid) {
    await store.dispatch(fetchUser(user?.uid));
    await store.dispatch(fetchProviders());
    await store.dispatch(fetchAppointments());
    await store.dispatch(fetchServices());
  }
  store.dispatch(setLoading(false));
});
