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
      const { name, isAvailable } = provider.data();
      const { rate } = provider.data();
      providers.push({
        id,
        name,
        isAvailable,
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

export const updateRate = (id, stars, comment) => {
  const provider = findProviderById(id);
  const { uid } = firestore.auth().currentUser;

  const updatedAppointments = parseInt(provider.rate.totalAppointments) + 1;
  const updatedStars = parseInt(provider.rate.totalStars) + parseInt(stars);
  const updatedAverage = updatedStars / updatedAppointments;
  const providerComments = provider.rate.commentsList;

  const commentElement = 
  { 
    id : uid,
    commentary : comment
  }

  const providerRate = firestore
    .firestore()
    .collection('barbers')
    .doc(id);
  
    if(providerComments){
      providerComments.push(commentElement);
      providerRate.update({
        rate: {
          totalAppointments : updatedAppointments,
          totalStars : updatedStars,
          ratesAverage : updatedAverage,
          commentsList : providerComments
        }
      });
    }else{
      providerRate.update({
        rate: {
          totalAppointments : updatedAppointments,
          totalStars : updatedStars,
          ratesAverage : updatedAverage,
          commentsList : [ commentElement ]
        }
      });
    }
}

const receiveProviders = payload => {
  return {
    type: RECEIVE_PROVIDERS,
    payload,
  };
};
