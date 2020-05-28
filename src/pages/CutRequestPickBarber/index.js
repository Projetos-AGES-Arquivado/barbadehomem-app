import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input/index'

import { Header } from './styles';

import './styles.css';

export default function CutRequestPickBarber() {
  const providers = useSelector(store => store.provider.providers);
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();
  let selectedProviders = '';
  

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

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

      {providers.map(provider => (
        <div className="divradio">
          <input type="radio" id={provider.name} name="provider" value={provider.name} onClick={() => handleClick(provider.name)}/>
          <label> {provider.name}</label>
        </div>
      ))}

      <div className ='divinput' >
        <span>Sugira uma data e um horário de sua escolha</span>
       <Input
          placeholder="(dd/mm/aaaa)"
          type="date"
        />
       <Input
          placeholder=""
          type="time"
        />
      </div>

      <div className="divbutton">
        <Button>Enviar Solicitação</Button>
      </div>
    </div>
  );
}
