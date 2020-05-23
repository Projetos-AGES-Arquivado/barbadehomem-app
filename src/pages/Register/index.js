import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { registerUser } from '../../store/auth/actions';
import { birthdayParser, phoneParser } from '../../utils';

import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

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

    const newUser = {
      name,
      email,
      birthday,
      phone,
      password,
    };

    const schema = Yup.object().shape({
      phone: Yup.string().length(15, 'Digite um telefone válido.'),
      birthday: Yup.string().length(10, 'Digite uma data válida.'),
      password: Yup.string().min(
        6,
        'A senha precisa ter pelo menos 6 dígitos.'
      ),
      email: Yup.string()
        .required('E-mail obrigatório.')
        .email('Digite um e-mail válido.'),
      name: Yup.string().required('Nome obrigatório.'),
    });

    try {
      await schema.validate(newUser, {
        abortEarly: true,
      });

      if (password !== repeatPassword) {
        setErrMessage('As senhas não são iguais.');
        return;
      }

      await dispatch(registerUser(newUser));
      history.push('/register/address');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrMessage(err.message);
        return;
      } else if (err.code === 'auth/email-already-in-use') {
        setErrMessage('Já existe uma conta vinculada à esse email.');
        return;
      }
    }
  }

  return (
    <div className="register-container">
      <header className="header-register">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Crie sua conta</h1>
      </header>

      {!!errMessage && <span className="err-message">{errMessage}</span>}

      <form onSubmit={handleUserRegister}>
        <Input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
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
          placeholder="Nascimento"
          type="text"
          value={birthday}
          onChange={e => setBirthday(birthdayParser(e.target.value))}
        />

        <Input
          placeholder="Telefone"
          type="text"
          value={phone}
          onChange={e => setPhone(phoneParser(e.target.value))}
        />
        <Button type="submit">Próximo ></Button>
      </form>
    </div>
  );
}
