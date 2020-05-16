import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import { Header, Solicitation, Container } from './styles';

const Solicitations = props => {
  const history = useHistory();
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

        <Solicitation pending>
          <li>
            <label>Agendado: 17/05/2020</label>
            <strong>R$50,00</strong>
          </li>
          <li>
            <label>Horário: 17h30</label>
            <strong className="status">Em análise</strong>
          </li>
          <li>
            <label>Prestador: Marlon</label>
          </li>
          <li>
            <label>Serviços: Corte + Barba</label>
          </li>
        </Solicitation>
        <Solicitation done>
          <li>
            <label>Agendado: 22/05/2020</label>
            <strong>R$25,00</strong>
          </li>
          <li>
            <label>Horário: 20h45</label>
            <strong className="status">Concluído</strong>
          </li>
          <li>
            <label>Prestador: Frank</label>
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
