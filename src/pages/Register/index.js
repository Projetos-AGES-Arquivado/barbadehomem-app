import React from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth/actions';
import './styles.css';

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
    await dispatch(registerUser({ email, name, birthday, phone, password }));
    history.push('/register/address');
  }

  return (
    <div className="register-container">
      <header className="header-register">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Crie sua conta</h1>
      </header>

      <form onSubmit={handleUserRegister}>
        <Input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          placeholder="Confirmar senha"
          type="password"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />

        <Input
          placeholder="Nascimento (dd/mm/aaaa)"
          type="text"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />

        <Input
          placeholder="Telefone"
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
          <Button type="submit">Próximo ></Button>
      </form>
    </div>
  );
}
