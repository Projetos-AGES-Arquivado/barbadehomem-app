import { firestore } from '../../plugins/firebase';
import { store } from '../';

import { RECEIVE_PROVIDERS } from './actionTypes';

export const fetchProviders = () => {
  return async dispatch => {
    let providers = [];
    let rates =[];

    const providersRef = await firestore
      .firestore()
      .collection('barbers')
      .get();

    const ratesRef = await firestore
      .firestore()
      .collection('rates')
      .get();

    ratesRef.forEach(rate => {
      const { id } = rate;
      const {barberId, totalStars, totalAppointments, ratesAverage} = rate.data();
      rates.push({
        barberId,
        totalStars,
        totalAppointments,
        ratesAverage,
        id,
      });
    });

    providersRef.forEach(provider => {
      const { id } = provider;
      const { name } = provider.data();
      const rate = rates.find(findRate => findRate.barberId === id);
      providers.push({
        id,
        name,
        rate,
      });
    });

    dispatch(receiveProviders(providers));
  };
};

export const findProviderById = id => {
  const providers = store.getState().provider.providers;

  const provider = providers?.find(provider => provider.id === id);

  return provider;
};

const receiveProviders = payload => {
  return {
    type: RECEIVE_PROVIDERS,
    payload,
  };
};
