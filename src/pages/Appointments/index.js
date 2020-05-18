import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import {} from 'firebase';

import { getAppointments } from '../../store/auth/actions';
import formatDate from '../../utils/formatDate';

import { Header, Solicitation, Container } from './styles';

const Solicitations = () => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const newAppointments = await getAppointments();

      setAppointments(newAppointments);
    }

    loadAppointments();
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
        <Solicitation booked>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 13h</label>
            <strong className="status">Agendado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
        <Solicitation done>
          <li>
            <label>Concluído: 23/05/2020</label>
            <strong>R$50,00</strong>
          </li>
          <li>
            <label>Horário: 19h30</label>
            <strong className="status">Concluído</strong>
          </li>
          <li>
            <label>Prestador: Bruno</label>
          </li>
          <li>
            <label>Serviços: Corte + Barba</label>
          </li>
        </Solicitation>
        <Solicitation done>
          <li>
            <label>Concluído: 22/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 20h45</label>
            <strong className="status">Concluído</strong>
          </li>
          <li>
            <label>Prestador: Franck</label>
          </li>
          <li>
            <label>Serviços: Corte</label>
            <Link to="">Avaliar</Link>
          </li>
        </Solicitation>
        <Solicitation canceled>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 9h</label>
            <strong className="status">Cancelado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
        <Solicitation canceled>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 9h</label>
            <strong className="status">Cancelado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
        <Solicitation canceled>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 9h</label>
            <strong className="status">Cancelado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
        <Solicitation canceled>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 9h</label>
            <strong className="status">Cancelado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
        <Solicitation canceled>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 9h</label>
            <strong className="status">Cancelado</strong>
          </li>
          <li>
            <label>Prestador: Thiago</label>
          </li>
          <li>
            <label>Serviços: Barba</label>
          </li>
        </Solicitation>
      </Container>
    </>
  );
};

export default Solicitations;
