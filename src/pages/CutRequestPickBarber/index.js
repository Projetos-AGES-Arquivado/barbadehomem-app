import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import * as Yup from "yup";

import Button from '../../components/Button';
import Input from '../../components/Input/index'
import '../../global.css';


import './styles.css';

export default function CutRequestPickBarber() {

  const providers = useSelector(store => store.provider.providers);
  const [errMessage, setErrMessage] = useState('');
  const [date,setDate] = useState('');
  const [time, setTime] = useState('');
  const history = useHistory();
  let selectedProviders = '';
  

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

  const SendSolicitation =async e => {
    e.preventDefault();
    const user  = {date, time}
    if(selectedProviders === ''){
      setErrMessage("Escolha um barbeiro")
      return
    }
   try{ const schema = Yup.object().shape({
        date: Yup.date().required(),
        time: Yup.string().required()
      })
      await schema.validate(user,{
        abortEarly: false,
      })
      console.log('foi')

    }catch(err){
      if(err instanceof Yup.ValidationError){
        console.log(err)
        setErrMessage("Complete os campos para proseguir");
      }
    }

  }

  function handleClick(id) {
    const element = document.getElementById(id);
    if (element.checked) {
      selectedProviders = element.value;
      console.log(selectedProviders);
    }
  }

  return (
    <div className="PickBarber-container">
      <header className="header-PickBarber">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Selecionar Barbeiro</h1>
      </header>

      <span className = 'err-message'>{errMessage}</span>

      {providers.map(provider => (
        <div className="divradio" key = {provider.id}>
          <input type="radio" id={provider.name} name="provider" value={provider.name} onClick={() => handleClick(provider.name)}/>
          <label for = {provider.name}> {provider.name}</label>
        </div>
      ))}

      <div className ='divinput' >
        <span>Sugira uma data e um horário de sua escolha</span>
       <Input
          placeholder="(dd/mm/aaaa)"
          type="date"
          value = {date}
          onChange={e => setDate(e.target.value)}
        />
       <Input
          type="time"
          value = {time}
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <div className="divbutton">
        <Button onClick = {SendSolicitation}>Enviar Solicitação</Button>
      </div>
    </div>
  );
}
