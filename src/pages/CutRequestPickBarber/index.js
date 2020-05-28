import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

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
    <div>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Escolher Barbeiro</h1>
      </Header>

      {providers.map(provider => (
        <div className="forminput">
          <input type="radio" id={provider.name} name="provider" value={provider.name} onClick={() => handleClick(provider.name)}/>
          <label>{provider.name}</label>
        </div>
      ))}
    </div>
  );
}
