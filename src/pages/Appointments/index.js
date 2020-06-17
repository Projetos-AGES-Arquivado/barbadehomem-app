import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import {
  formattedDate,
  formattedServices,
  formattedTime,
  formattedValue,
  formattedStatus,
} from '../../utils';

import { Header, Solicitation, Container } from './styles';
import Button from '../../components/Button';

const Solicitations = () => {
  const history = useHistory();
  const appointments = useSelector(store => store.appointment.appointments);

  const handleGoBack = e => {
    history.push("/home");
  };

  const handleEvaluation = appointment => {
      history.push('/home/evaluation', { appointment });
  };

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
              {appointment?.wasRated === false &&
                appointment.status === 'done' && (
                  <label onClick={() => handleEvaluation(appointment)}>
                    Avaliar
                  </label>
                )}
              {appointment?.wasRated === true && <span>Avaliado</span>}
            </li>
          </Solicitation>
        ))}
      </Container>
    </>
  );
};

export default Solicitations;
