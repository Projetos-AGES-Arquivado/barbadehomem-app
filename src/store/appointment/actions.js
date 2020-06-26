import { isBefore } from 'date-fns';
import { firestore } from '../../plugins/firebase';
import { RECEIVE_APPOINTMENTS } from './actionTypes';

import { store } from '../';

import { findProviderById } from '../provider/actions';

export const receiveAppointments = payload => {
  return {
    type: RECEIVE_APPOINTMENTS,
    payload,
  };
};

export const fetchAppointments = () => {
  return async dispatch => {
    const { uid } = firestore.auth().currentUser;

    firestore
      .firestore()
      .collection('appointments')
      .where('userId', '==', uid)
      .orderBy('date', 'desc')
      .onSnapshot(appointmentsRef => {
        let appointments = [];

        appointmentsRef.forEach(appointment => {
          const { id } = appointment;
          const {
            barberId,
            cost,
            date,
            services,
            status,
            wasRated,
            payment_method,
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
            payment_method,
            userId,
          });
        });

        dispatch(receiveAppointments(appointments));
      });
  };
};

export const registerAppointment = appointment => {
  return async dispatch => {
    const { date, time, ...rest } = appointment;
    const parsedDate = new Date(date + ' ' + time);

    if (isBefore(parsedDate, Date.now())) {
      throw new Error(
        'Você não pode criar um atendimento com uma data passada.'
      );
    }

    const newAppointment = {
      ...rest,
      date: parsedDate,
    };

    await firestore.firestore().collection('appointments').add(newAppointment);

    await dispatch(fetchAppointments());
  };
};

export const appointmentWasRated = id => {

  const appointment = firestore
    .firestore()
    .collection('appointments')
    .doc(id);

  appointment.update({
    wasRated: true
  })

}
export const cancelAppointment = appointmentId => {
  return async dispatch => {
    const newStatus = 'cancelled';

    await firestore
      .firestore()
      .collection('appointments')
      .doc(appointmentId)
      .update({ status: newStatus });

    const appointments = store.getState().appointment.appointments;

    const findIndex = appointments.findIndex(item => item.id === appointmentId);

    const updatedAppointments = appointments;
    updatedAppointments[findIndex].status = newStatus;

    await dispatch(receiveAppointments(updatedAppointments));
  };
};
