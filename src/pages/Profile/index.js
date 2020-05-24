import React from 'react';
// import Button from '../../components/Button';
// import Silhueta from '../../img/silhueta.png';

// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';

import { Header } from './styles';

import './styles.js';
export default function Profile() {
  const history = useHistory();
  //   const dispatch = useDispatch();
  //   const user = useSelector(store => store.auth.user);
  const handleGoBack = e => {
      history.goBack();
      e.preventDefault();
  };

  return (
      <div>
          <Header>
              <FiCornerDownLeft size={25} onClick={handleGoBack} />
              <h1>Perfil</h1>
          </Header>
      </div>
  );
}
