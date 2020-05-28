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
      <header className="header-CutRequest">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Solicitar Serviço</h1>
      </header>

      <span className="err-message">{errMessage}</span>

      {services.map(service => (
        <div className="forminput">
          <input type="checkbox" id={service.titleService} value={service.titleService} onClick={() => handleClick(service.titleService)}/>
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
