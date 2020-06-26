import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import { differenceInHours } from 'date-fns';
import Swal from 'sweetalert2';
import { cancelAppointment } from '../../store/appointment/actions';

import {
  formattedDate,
  formattedServices,
  formattedTime,
  formattedValue,
  formattedStatus,
} from '../../utils';

import { Header, Solicitation, Container } from './styles';

const Solicitations = () => {
  const history = useHistory();
  const appointments = useSelector(store => store.appointment.appointments);

  const dispatch = useDispatch();

  const handleGoBack = e => {
    history.push('/home');
  };

  const handleEvaluation = appointment => {
    history.push('/home/evaluation', { appointment });
  };

  async function handleCancelAppointment(appointmentId) {
    await dispatch(cancelAppointment(appointmentId));
    Swal.fire('Agendamento cancelado com sucesso!');
  }

  return (
    <>
      <Container>
        <Header>
          <FiCornerDownLeft size={25} onClick={handleGoBack} />
          <h1>Minhas solicitações</h1>
        </Header>
        {appointments.map(appointment => (
          <Solicitation key={appointment.id} status={appointment.status}>
            <li>
              <label>Agendado: {formattedDate(appointment.date)}</label>
              <strong>{formattedValue(appointment.cost)}</strong>
            </li>
            <li>
              <label>Horário: {formattedTime(appointment.date)}</label>
              <p>{formattedStatus(appointment.status)}</p>
            </li>
            <li>
              <label>Prestador: {appointment.provider.name}</label>
            </li>
            <li>
              <label>Serviços: {formattedServices(appointment.services)}</label>
              {appointment.status === 'pending' &&
              differenceInHours(
                new Date(appointment.date.toDate()),
                Date.now()
              ) > 24 ? (
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        'Tem certeza que deseja cancelar essa solicitação?'
                      )
                    ) {
                      handleCancelAppointment(appointment.id);
                    }
                  }}
                >
                  Cancelar
                </button>
              ) : (
                <>
                  {appointment.status === 'done' && !appointment.wasRated && (
                    <label onClick={() => handleEvaluation(appointment)}>
                      Avaliar
                    </label>
                  )}
                  {appointment.status === 'done' && appointment.wasRated && (
                    <span>Avaliado</span>
                  )}
                </>
              )}
            </li>
            <li>
              <label>Meio de pagamento: {appointment.payment_method}</label>
            </li>
          </Solicitation>
        ))}
      </Container>
    </>
  );
};

export default Solicitations;
