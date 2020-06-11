import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import generalReducer from './general/reducer';
import appointmentReducer from './appointment/reducer';
import providerReducer from './provider/reducer';
import serviceReducer from './services/reducer';
import paymentReducer from './payment/reducer'

import { auth, messaging, firestore } from '../plugins/firebase';
import { setLoading } from './general/actions';
import { fetchUser } from './auth/actions';
import { fetchAppointments } from './appointment/actions';
import { fetchProviders } from './provider/actions';
import { fetchServices } from './services/actions';
import {fetchPayment} from './payment/actions'

export const store = createStore(
  combineReducers({
    auth: authReducer,
    general: generalReducer,
    appointment: appointmentReducer,
    provider: providerReducer,
    service: serviceReducer,
    payments: paymentReducer
  }),
  applyMiddleware(thunk)
);

auth.onAuthStateChanged(async user => {
  if (user?.uid) {
    setImmediate(async () => {
      try {
        await messaging.requestPermission();
        const deviceToken = await messaging.getToken();
        if (deviceToken) {
          await firestore
            .firestore()
            .collection('users')
            .doc(user?.uid)
            .update({ deviceToken });
        }
        console.log('Saved device token for messaging', { userId: user?.uid });
      } catch (err) {
        console.log('Failed saving device token for messaging', err);
      }
    });
    await store.dispatch(fetchUser(user?.uid));
    await store.dispatch(fetchProviders());
    await store.dispatch(fetchAppointments());
    await store.dispatch(fetchServices());
    await store.dispatch(fetchPayment())
  }
  store.dispatch(setLoading(false));
});
