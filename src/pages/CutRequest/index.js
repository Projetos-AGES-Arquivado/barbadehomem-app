import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import '../../global.css';
import './styles.css';
import { Header } from './styles.js';
import { formattedValue } from '../../utils';

const CutRequest = () => {
  const services = useSelector(store => store.service.services);
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();
  const [selectedServices = [], setSelectedServices] = useState();
  const [costTotal, setCostTotal] = useState(0);

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

  const handleCutRequestPickBarber = e => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      return setErrMessage('Escolha uma das opcões abaixo');
    } else {
      history.push({
        pathname: '/home/cutrequest/pickbarber',
        state: { services: selectedServices, total: costTotal },
      });
    }
  };

  function handleClick(id) {
    const element = document.getElementById(id);
    const findIndex = services.findIndex(
      service => service.titleService === id
    );

    if (element.checked) {
      selectedServices.push(element.value);
      setCostTotal(costTotal + services[findIndex].cost);
    } else {
      const indexToRemove = selectedServices.findIndex(
        service => service === element.value
      );

      selectedServices.splice(indexToRemove, 1);
      setCostTotal(costTotal - services[findIndex].cost);
    }

    setSelectedServices(selectedServices);
  }

  return (
    <div className="CutRequest-container">
      <Header className="header-CutRequest">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Solicitar Serviço</h1>
      </Header>

      <span className="err-message">{errMessage}</span>

      {services.map(service => (
        <div className="div-cutRequest" key={service.id}>
          <div>
            <div className="div-cost-cutRequest">
              {' '}
              {formattedValue(service.cost)}{' '}
            </div>
            <input
              type="checkbox"
              id={service.titleService}
              value={service.titleService}
              onClick={() => handleClick(service.titleService)}
            />
            <label htmlFor={service.titleService}>{service.titleService}</label>
          </div>
          <div className="div-text-cutRequest">
            Duração: {service.duration} min
          </div>
          <div className="div-text-cutRequest">
            Descrição: {service.description}{' '}
          </div>
        </div>
      ))}
      <p>
        Total: <strong>{formattedValue(costTotal)}</strong>
      </p>
      <div className="button-cutRequest">
        <Button onClick={handleCutRequestPickBarber}>Agendar horário</Button>
      </div>
    </div>
  );
};

export default CutRequest;
