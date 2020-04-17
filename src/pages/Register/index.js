import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth/actions';

export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  //DECLARAÇÕES DE ESTADO DOS DADOS DO USUÁRIO
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  function handleGoBack() {
    history.push('/');
  }

  async function handleUserRegister(e) {
    e.preventDefault();

    await dispatch(registerUser({ email, name, birthday, phone, password }));
    history.push('/register/address');
  }

  return (
    <div>
      <h1>Estou na tela de cadastro</h1>
      <form onSubmit={handleUserRegister}>
        <ul>
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
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="99999-9999"
            />
          </li>
          <button onClick={handleGoBack}>Voltar</button>
          <button type="submit">Próximo</button>
        </ul>
      </form>
    </div>
  );
}
