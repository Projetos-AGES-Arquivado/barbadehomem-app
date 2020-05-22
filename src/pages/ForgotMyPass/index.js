import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resetPassword } from '../../store/auth/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

export default function ForgotMyPass() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState();

  async function handleResetPassword(e) {
    e.preventDefault();

    setSuccessMessage('');

    await dispatch(resetPassword(email));
    setSuccessMessage(
      'Email enviado. Caso esteja correto, você receberá um link com uma redefinição de senha.'
    );
  }

  function handleGoHome() {
    history.push('/');
  }

  return (
    <div className="forgot-password-container">
      <header>
        <FiCornerDownLeft size={25} onClick={handleGoHome} />
        <h1>Recuperar conta</h1>
      </header>

      <form onSubmit={handleResetPassword}>
        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}

        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
