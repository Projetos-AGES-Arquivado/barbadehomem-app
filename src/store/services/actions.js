import { firestore } from '../../plugins/firebase';
import { RECEIVE_SERVICES } from './actionTypes';

const receiveServices = payload => {
  return {
    type: RECEIVE_SERVICES,
    payload,
  };
};

export const fetchServices = () => {
  return async dispatch => {
    let services = [];

    const servicesRef = await firestore
      .firestore()
      .collection('services')
      .get();

    servicesRef.forEach(service => {
      const { id } = service;
      const {
        titleService,
        cost,
        duration,
        description
      } = service.data();

      services.push({
        id,
        titleService,
        cost,
        duration,
        description
      });
    });
    await dispatch(receiveServices(services));
  };
};
