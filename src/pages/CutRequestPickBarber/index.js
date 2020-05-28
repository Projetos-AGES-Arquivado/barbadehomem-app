import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

import { Header } from './styles';

import './styles.js';

export default function CutRequestPickBarber() {
  const providers = useSelector(store => store.provider.providers);
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();
  

  const handleGoBack = e => {
    history.goBack();
    e.preventDefault();
  };

  return (
    <div>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Escolher Barbeiro</h1>
      </Header>
    </div>
  );
}
