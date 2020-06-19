import { firestore } from '../../plugins/firebase';
import { RECEIVE_PAYMENT } from './actionTypes';

const receivePayment = payload => {
  return {
    type: RECEIVE_PAYMENT,
    payload,
  };
};

export const fetchPayment = () => {
  return async dispatch => {
    let payments = [];

    const paymentRed = await firestore
      .firestore()
      .collection('payment_methods')
      .get();

    paymentRed.forEach(typeMethod => {
      const { id } = typeMethod;
      const {
        method,
      } = typeMethod.data();

      payments.push({
        id,
        method
      });
    });
    await dispatch(receivePayment(payments));
  };
};
