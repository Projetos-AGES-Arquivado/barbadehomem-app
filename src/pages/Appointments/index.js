import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import { store } from '../../store';
import {
  formatteDate,
  formattedServices,
  formattedTime,
  formattedValue,
  formattedStatus,
} from '../../utils';

import { Header, Solicitation, Container } from './styles';

const Solicitations = () => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    function recoverAppointments() {
      const existingAppointments = store.getState().appointment
        .userAppointments;

      if (existingAppointments) {
        setAppointments([...existingAppointments]);
      }
    }

    recoverAppointments();
  }, []);

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
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
              <label>Agendado: {formatteDate(appointment.date)}</label>
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
              {appointment?.wasRated === false && <Link to="">Avaliar</Link>}
              {appointment?.wasRated === true && <span>Avaliado</span>}
            </li>
          </Solicitation>
        ))}
      </Container>
    </>
  );
};

export default Solicitations;
