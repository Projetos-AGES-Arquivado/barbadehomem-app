import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import {
  formattedDate,
  formattedServices,
  formattedTime,
  formattedValue,
  formattedStatus,
} from '../../utils';

import { Header, Solicitation, Container } from './styles';
import Button from '../../components/Button';

const Solicitations = () => {
  const history = useHistory();
  const appointments = useSelector(store => store.appointment.appointments);

  const[name,setNome]= useState('')

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };
  const handleEvaluation = e =>{
    if(name !=''){
      history.push({
       pathname:'/home/evaluation',
        state:{names:name},
      })
    e.preventDefault()
    }else{
      console.log('deu problema');
    }
  }

  return (
    <>
      <Container>
        <Header>
          <FiCornerDownLeft size={25} onClick={handleEvaluation} />
          <h1>Minhas solicitações</h1>
        </Header>
        <span>{name}</span>
        {appointments.map(appointment => (
          <Solicitation onClick ={ e=> setNome(appointment.provider.name)}  key={appointment.id} status={appointment.status}>
            <li>
              <label>Agendado: {formattedDate(appointment.date)}</label>
              <strong>{formattedValue(appointment.cost)}</strong>
            </li>
            <li>
              <label>Horário: {formattedTime(appointment.date)}</label>
              <p>{formattedStatus(appointment.status)}</p>
            </li>
            <li>
              <label >Prestador: {appointment.provider.name}</label>
            </li>
            <li>
              <label>Serviços: {formattedServices(appointment.services)}</label>
              {appointment?.wasRated === false && appointment.status ==='done' && <Link to="">Avaliar</Link>}
              {appointment?.wasRated === true && <span>Avaliado</span>}
            </li>
          </Solicitation>
        ))}
      </Container>
    </>
  );
};

export default Solicitations;
