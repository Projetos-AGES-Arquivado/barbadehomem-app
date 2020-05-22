import React from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth/actions';
import './styles.css';
import { phoneParser, birthdayParser } from '../../utils';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [errMessage, setErrMessage] = useState('');

  function handleGoBack() {
    history.push('/');
  }

  async function handleUserRegister(e) {
    e.preventDefault();
    console.log(phone);

    try {
      await dispatch(registerUser({ email, name, birthday, phone, password }));
      history.push('/register/address');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setErrMessage('Email já cadastrado.');
      } else if (err.code === 'auth/weak-password') {
        setErrMessage('Senha com no mínimo 6 dígitos.');
      } else {
        setErrMessage('Erro interno, tente novamente mais tarde.');
      }
    }
  }

  return (
    <div className="register-container">
      <header className="header-register">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Crie sua conta</h1>
      </header>

      <form onSubmit={handleUserRegister}>
        <ul>
          {errMessage && (
            <li>
              <span className="err-message">{errMessage}</span>
            </li>
          )}
          <li>
            E-mail
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </li>
          <li>
            Senha
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </li>
          <li>
            Nome
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </li>
          <li>
            Nascimento
            <input
              value={birthday}
              onChange={e => setBirthday(birthdayParser(e.target.value))}
            />
          </li>
          <li>
            Telefone
            <input
              value={phone}
              onChange={e => setPhone(phoneParser(e.target.value))}
              placeholder="(99) 99999-9999"
            />
          </li>
          <button onClick={handleGoBack}>Voltar</button>
          <button type="submit">Próximo</button>
        </ul>
      </form>
    </div>
  );
}
