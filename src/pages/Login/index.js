import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import {
  authenticateUser,
  signinWithGoogle,
  signInWithFacebook,
} from '../../store/auth/actions';

import './styles.css';

import logoImg from '../../img/logo.png';
import facebookImg from '../../img/facebook.png';
import googleImg from '../../img/google.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email = '', setEmail] = useState();
  const [password = '', setPassword] = useState();
  const [errMessage = '', setErrMessage] = useState();
  const [loading = false, setLoading] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setErrMessage('');
    try {
      await dispatch(authenticateUser({ email, password }));
      history.push('/home');
    } catch (err) {
      if (
        [
          'auth/user-not-found',
          'auth/wrong-password',
          'auth/invalid-email',
          'auth/argument-error',
        ].includes(err.code)
      ) {
        setErrMessage('Email e/ou senha inválidos.');
      } else {
        setErrMessage('Erro interno, tente novamente mais tarde.');
      }
    }
    setLoading(false);
  }

  async function handleSignInWithGoogle() {
    await dispatch(signinWithGoogle());
  }

  async function handleSignInWithFacebook() {
    await dispatch(signInWithFacebook());
  }

  return (
    <div className="login-container">
      <header className="header-login">
        <img src={logoImg} alt="Barba De Homem" />
      </header>

      {errMessage && <span className="err-message">{errMessage}</span>}

      <form onSubmit={handleLogin}>
        <Input
          Icon={FiMail}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          Icon={FiLock}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Link to="forgotmypass">Esqueceu sua senha?</Link>

        <div className="sign-in-with">
          <img src={googleImg} alt="Google" onClick={handleSignInWithGoogle} />
          <img
            src={facebookImg}
            alt="Facebook"
            onClick={handleSignInWithFacebook}
          />
        </div>

        <Button type="submit">Entrar</Button>
      </form>

      <Link to="register">Cadastrar</Link>
    </div>
  );
}
