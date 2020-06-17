import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import { Header } from './styles';


export default function DealsAndInfo() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <Header>
          <FiCornerDownLeft size={25} onClick={handleGoBack} />
          <h1>Funcionamento e Promoções</h1>
        </Header>
    </div>
  );
}
