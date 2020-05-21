import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth/actions';
import './styles.css';
import { phoneParser } from '../../utils';

export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  //DECLARAÇÕES DE ESTADO DOS DADOS DO USUÁRIO
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [errMessage, setErrMessage] = useState('');

  function handleGoBack() {
    history.push('/');
  }

  async function handleUserRegister(e) {
    e.preventDefault();

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
    <div className="container">
      <h1>Estou na tela de cadastro</h1>
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
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
            />
          </li>
          <li>
            Telefone
            <input
              type="tel"
              value={phoneParser(phone)}
              onChange={e => setPhone(e.target.value)}
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
