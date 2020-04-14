import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resetPassword } from '../../store/auth/actions';

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
      console.log(err.message);
    }
  }

  function handleGoHome() {
    history.push('/');
  }

  return (
    <div>
      <h2>Informe seu endereço de email:</h2>
      <br />
      <input
        value={email}
        type="email"
        onChange={e => setEmail(e.currentTarget.value)}
      />{' '}
      <button onClick={handleResetPassword}>Enviar</button>
      <br />
      <button onClick={handleGoHome}>Voltar</button>
    </div>
  );
}
