import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { authenticateUser } from '../../store/auth/actions';
import { useDispatch } from 'react-redux';

export default function Logon() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogon(e) {
    e.preventDefault();

    try {
      await dispatch(authenticateUser({ email, password }));

      alert('Logado com sucesso!');
      
      history.push('/home');
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <section>
        <form onSubmit={handleLogon}>
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <br />
          Senha:{' '}
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Entrar</button>
          <ul>
            <li>
              <Link to="/register">Não tenho cadastro</Link>
            </li>
            <li>
              <Link to="/forgotmypass">Esqueci minha senha</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}
