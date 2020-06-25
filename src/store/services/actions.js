import { firestore } from '../../plugins/firebase';
import { RECEIVE_SERVICES, RECEIVE_PROMOTIONS } from './actionTypes';

const receiveServices = payload => {
  return {
    type: RECEIVE_SERVICES,
    payload,
  };
};

const receivePromotions = payload => {
  return {
    type: RECEIVE_PROMOTIONS,
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
      const { titleService, cost, duration, description } = service.data();

      services.push({
        id,
        titleService,
        cost,
        duration,
        description,
      });
    });
    await dispatch(receiveServices(services));
  };
};

export const fetchPromotions = () => {
  return async dispatch => {
    let promotions = [];

    const promotionsRef = await firestore
      .firestore()
      .collection('promotions')
      .get();

    promotionsRef.forEach(promotion => {
      const { content } = promotion.data();

      promotions.push(content);
    });

    await dispatch(receivePromotions(promotions));
  };
};
