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
      const { rate } = provider.data();
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

export const updateRate = (id, stars) => {
  const provider = findProviderById(id);

  const providerRate = firestore
    .firestore()
    .collection('barbers')
    .doc(id);
    
    console.log(provider);
  const updatedAppointments = parseInt(provider.rate.totalAppointments) + 1;
  const updatedStars = parseInt(provider.rate.totalStars) + parseInt(stars);
  const updatedAverage = updatedStars / updatedAppointments;

  providerRate.update({
    rate: {
      totalAppointments : updatedAppointments,
      totalStars : updatedStars,
      ratesAverage : updatedAverage
    }
  });
}

const receiveProviders = payload => {
  return {
    type: RECEIVE_PROVIDERS,
    payload,
  };
};
