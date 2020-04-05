import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../store/user/actions';

export default function Register() {
  const history = useHistory();

  //DECLARAÇÕES DE ESTADO DOS DADOS DO USUÁRIO
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const test = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function handleGoBack() {
    history.push('/');
  }

  async function handleUserRegister(e) {
    e.preventDefault();

    await dispatch(await registerUser({
      email,
      name,
      birthday,
      phone,
    }));
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
              pattern="[0-9]{5}-[0-9]{4}"
              required
            />
          </li>
          <button onClick={handleGoBack}>Voltar</button>
          <button type="submit">Próximo</button>
        </ul>
      </form>
    </div>
  );
}
