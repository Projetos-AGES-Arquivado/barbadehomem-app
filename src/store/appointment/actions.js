/* eslint-disable react-hooks/rules-of-hooks */

import { firestore } from '../../plugins/firebase';

import { store } from '../';

import { RECEIVE_PROVIDERS, RECEIVE_APPOINTMENTS } from './actionTypes';

const receiveProviders = payload => {
  return {
    type: RECEIVE_PROVIDERS,
    payload,
  };
};

const receiveAppointments = payload => {
  return {
    type: RECEIVE_APPOINTMENTS,
    payload,
  };
};

export const fetchProviders = () => {
  return async dispatch => {
    let providers = [];
    const providersRef = await firestore
      .firestore()
      .collection('barbers')
      .get();

    providersRef.forEach(provider => {
      const { id } = provider;
      const { name } = provider.data();

      providers.push({
        id,
        name,
      });
    });
    dispatch(receiveProviders(providers));
  };
};

export const fetchAppointments = () => {
  return async dispatch => {
    const { uid } = firestore.auth().currentUser;
    let appointments = [];

    const appointmentsRef = await firestore
      .firestore()
      .collection('appointments')
      .where('userId', '==', uid)
      .get();

    appointmentsRef.forEach(appointment => {
      const { id } = appointment;
      const {
        barberId,
        cost,
        date,
        services,
        status,
        wasRated,
      } = appointment.data();

      let existingProvider = findProviderById(barberId);

      if (!existingProvider) {
        existingProvider = {
          barberId,
          name: 'Desconhecido',
        };
      }

      appointments.push({
        id,
        date,
        cost,
        status,
        provider: existingProvider,
        services,
        wasRated,
      });
    });

    dispatch(receiveAppointments(appointments));
  };
};

export const findProviderById = id => {
  const providers = store.getState().appointment.providers;

  const provider = providers.find(provider => provider.id === id);

  return provider;
};
