import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { dateParser, timeParser } from '../../utils';

import { registerAppointment } from '../../store/appointment/actions';

import Button from '../../components/Button';
import Input from '../../components/Input/index';

import './styles.css';

export default function CutRequestPickBarber() {
  const providers = useSelector(store => store.provider.providers);
  const user = useSelector(store => store.auth.user);
  const address = useSelector(store => store.auth.user.addresses[0]);

  const [errMessage, setErrMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedProviderId, setSelectedProviderId] = useState('');

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const services = location.state.services;
  const costTotal = location.state.total;

  const handleGoBack = e => {
    e.preventDefault();
    history.goBack();
  };

  const handleRegisterAppointment = async e => {
    e.preventDefault();

    const appointment = {
      addressId: address.id,
      barberId: selectedProviderId,
      cost: costTotal,
      date,
      time,
      services,
      status: 'pending',
      userId: user.id,
      wasRated: false,
    };

    try {
      const schema = Yup.object().shape({
        time: Yup.string().required('Informe um horário válido!'),
        date: Yup.string().required('Informe uma data válida!'),
        barberId: Yup.string().required('Selecione um barbeiro!'),
      });

      await schema.validate(appointment, {
        abortEarly: true,
      });

      await dispatch(registerAppointment(appointment));
      history.push('/home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrMessage(err.message);
      } else {
        setErrMessage(err.message);
      }
    }
  };

  function handleSelecProvider(id) {
    setSelectedProviderId(id);
  }

  return (
    <div className="PickBarber-container">
      <header className="header-PickBarber">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Selecionar Barbeiro</h1>
      </header>

      <span className="err-message">{errMessage}</span>

      {providers.map(provider => (
        <div className="divradio" key={provider.id}>
          <input
            type="radio"
            id={provider.name}
            name="provider"
            value={provider.name}
            onClick={() => handleSelecProvider(provider.id)}
          />
          <label htmlFor={provider.name}> {provider.name}</label>
        </div>
      ))}

      <div className="divinput">
        <span>Sugira uma data e um horário de sua escolha</span>
        <Input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <Input
          placeholder="hora"
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <div className="divbutton">
        <Button onClick={handleRegisterAppointment}>Enviar Solicitação</Button>
      </div>
    </div>
  );
}
