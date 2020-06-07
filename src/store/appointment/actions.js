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
        userId,

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
        userId,
      });
    });

    dispatch(receiveAppointments(appointments));
  };
};

export const registerAppointment = appointment => {
  return async dispatch => {
    const { date, time, ...rest } = appointment;
    const parsedDate = new Date(date + ' ' + time);

    const newAppointment = {
      ...rest,
      date: parsedDate,
    };

    await firestore.firestore().collection('appointments').add(newAppointment);

    await dispatch(fetchAppointments());
  };
};


export const cancelAppointment = async appointment => {
  const{provider,...updatedAppointment} = appointment;
  
  const publicData = {
    ...updatedAppointment,
    barberId: provider.id,
    status: "canceled",
  }
  console.log(publicData);
  await firestore.firestore().collection("appointments").doc(appointment.id).update(publicData);
};
