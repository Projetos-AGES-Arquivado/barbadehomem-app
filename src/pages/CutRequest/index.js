import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import '../../global.css';
import './styles.css';
import { Header } from './styles.js';

export default function CutRequest() {
  const services = useSelector(store => store.service.services);
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();
  const selectedServices = [];

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

  const handleCutRequestPickBarber = e => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      return setErrMessage('Escolha uma das opcões abaixo');
    } else {
      history.push('/home/cutrequest/pickbarber');
    }
  };

  function handleClick(id) {
    const element = document.getElementById(id);
    if (element.checked) {
      selectedServices.push(element.value);
      console.log(selectedServices);
    }
    else {
      const findIndex = selectedServices.findIndex(service => service === element.value);
      selectedServices.splice(findIndex, 1);
      console.log(selectedServices);
    }
  }

  return (
    <div className="CutRequest-container">
      <Header className="header-CutRequest">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Solicitar Serviço</h1>
      </Header>

      <span className="err-message">{errMessage}</span>

      {services.map(service => (
        <div className="div-cutRequest">
          <div >
            <input type="checkbox" id={service.titleService} value={service.titleService} onClick={() => handleClick(service.titleService)} />
            <label>{service.titleService}</label>
          </div>

          <div className="div-cost-cutRequest">R$ {service.cost},00 </div>
          <div className="div-text-cutRequest">Duração: {service.duration} min</div>
          <div className="div-text-cutRequest">Descrição: {service.description} </div>
        </div>
      ))}
      <div className="button-cutRequest">
        <Button onClick={handleCutRequestPickBarber}>Agendar horário</Button>
      </div>
    </div>
  );
}
