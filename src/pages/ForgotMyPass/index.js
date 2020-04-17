import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../../css/forgot-page.css';
import '../../css/header.css';

import Background from '../../components/Background';

import { resetPassword } from '../../store/auth/actions';
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function ForgotMyPass() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  function handleResetPassword() {
    try {
      dispatch(resetPassword(email));

      alert(
        'Email enviado. Caso esteja correto, você receberá um link com uma redefinição de senha.'
      );

      handleGoHome();
    } catch (err) {
      console.log(err);
    }
  }

  function handleGoHome() {
    history.push('/');
  }

  return (
    <Background>
      <Header text="Recuperar senha"/>

      <div className="div-forgotmypass">
        <div className="div-input-forgot">
          <h3>Informe seu endereço de email</h3>
          <input
            value={email}
            type="email"
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <Button classe="button" text="Enviar" event={handleResetPassword} />
        <Button classe="button" text="Voltar" event={handleGoHome} />
      </div>

    </Background>
  );
}