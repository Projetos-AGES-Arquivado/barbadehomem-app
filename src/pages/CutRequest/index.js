import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import '../../global.css';
import './styles.css';

export default function CutRequest() {
  const services = useSelector(store => store.service.services);
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };
  const handleCutRequestPickBarber = e => {
    e.preventDefault();
    if (!handleCheckbox()) {
      return setErrMessage('Escolha apenas uma das opcões abaixo');
    } else {
      history.push('/home/cutrequest/pickbarber');
    }
  };

  function handleCheckbox() {
    // let count = 0;
  }

  function handleClick(e) {
    document.getElementById(e).click();
  }

  return (
    <div className="CutRequest-container">
      <header className="header-CutRequest">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Solicitar Serviço</h1>
      </header>

      <span className="err-message">{errMessage}</span>

      {services.map(service => (
        <div className="forminput" onClick={e => handleClick()}>
          <input type="checkbox" id="Corte" />
          <label>{service.titleService}</label>
          <span className="text">{service.cost}</span>
          <span className="text">{service.duration}</span>
          <span className="text">{service.description}</span>
        </div>
      ))}
      <div className="formbutton">
        <Button onClick={handleCutRequestPickBarber}>Agendar horário</Button>
      </div>
    </div>
  );
}
