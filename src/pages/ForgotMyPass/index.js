import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { resetPassword } from '../../store/auth/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

export default function ForgotMyPass() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [tooltipClass, setTooptipClass] = useState('success-message');

  async function handleResetPassword(e) {
    e.preventDefault();

    const userEmail = {
      email,
    };

    const schema = Yup.object().shape({
      email: Yup.string()
        .required('E-mail obrigatório.')
        .email('Digite um e-mail válido.'),
    });

    try {
      await schema.validate(userEmail, {
        abortEarly: true,
      });

      await dispatch(resetPassword(email));

      setTooltipMessage(
        'Email enviado. Caso esteja correto, você receberá um link com instruções para a redefinição da senha.'
      );
      setTooptipClass('success-message');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setTooltipMessage(err.message);
        setTooptipClass('err-message');
        return;
      }
    }
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
        {tooltipMessage && (
          <span className={tooltipClass}>{tooltipMessage}</span>
        )}

        <Input
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
