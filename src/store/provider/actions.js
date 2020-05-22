import { firestore } from '../../plugins/firebase';
import { store } from '../';

import { RECEIVE_PROVIDERS } from './actionTypes';

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

export const findProviderById = id => {
  const providers = store.getState().appointment.providers;

  const provider = providers?.find(provider => provider.id === id);

  return provider;
};

const receiveProviders = payload => {
  return {
    type: RECEIVE_PROVIDERS,
    payload,
  };
};
