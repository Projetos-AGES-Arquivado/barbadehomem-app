import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { firestore } from '../../plugins/firebase';
import * as state from '../../store/index';

import * as authActions from '../../store/actions/user/userActions';

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

    const response = await firestore
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const user = {
      auth: {
        id: response.user.uid,
      },
      profile: {
        email,
        name,
        birthday,
        phone,
      },
    };

    await firestore
      .firestore()
      .collection('usuarios')
      .doc(user.auth.id)
      .set(user.profile);

    dispatch({ type: 'USER_REGISTER', user });
    console.log(test);
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
