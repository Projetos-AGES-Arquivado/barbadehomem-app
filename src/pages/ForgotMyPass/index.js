import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../../css/forgot-page.css';

import Silhueta from '../../img/silhueta.png';
import Background from '../../components/Background';

import { resetPassword } from '../../store/auth/actions';
import Button from '../../components/Button';
import Image from '../../components/Image';

export default function ForgotMyPass() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [successMessage, setSuccessMessage] = useState();

  async function handleResetPassword() {
    setSuccessMessage('');
    await dispatch(resetPassword(email));
    setSuccessMessage('Email enviado. Caso esteja correto, você receberá um link com uma redefinição de senha.');
    handleGoHome();
  }

  function handleGoHome() {
    history.push('/');
  }

  return (
    <Background>
      <div className="div-Silhueta">
        <Image src={Silhueta} alt="Logo Barba de Homem" />
        <h2> Recuperar Senha</h2>
        {successMessage && <span className="success-message">{successMessage}</span>}
      </div>
      <div className="div-forgotmypass">
        <h3>Informe seu endereço de email</h3>
        <input
          value={email}
          type="email"
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <Button classe="button" text="Enviar" event={handleResetPassword} />
        <Button classe="button" text="Voltar" event={handleGoHome} />
      </div>
    </Background>
  );
}