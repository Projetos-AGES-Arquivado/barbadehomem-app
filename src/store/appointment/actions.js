import { firestore } from '../../plugins/firebase';
import { RECEIVE_APPOINTMENTS } from './actionTypes';

import { findProviderById } from '../provider/actions';

const receiveAppointments = payload => {
  return {
    type: RECEIVE_APPOINTMENTS,
    payload,
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
