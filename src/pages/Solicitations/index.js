import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import { Header } from './styles';

const Solicitations = props => {
  const history = useHistory();
  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

  return (
    <>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Minhas solicitações</h1>
      </Header>

      <div className="solicitations-container">
        <div className="solicitation">
          <p>Data: 17/05/2020</p>
          <p>Hora: 17:30h</p>
          <p>Status: Em análise</p>
          <p>Prestador: Marlon Saldanha</p>
          <p>Serviço solicitado: Barba + Corte</p>
          <p>Total: R$ 50,00</p>
        </div>
      </div>
    </>
  );
};

export default Solicitations;
