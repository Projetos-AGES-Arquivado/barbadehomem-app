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
    //TODO...

    await dispatch(receiveServices());
  };
};
