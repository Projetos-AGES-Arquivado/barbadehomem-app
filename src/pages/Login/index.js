import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { authenticateUser, signinWithGoogle, signInWithFacebook } from '../../store/auth/actions';

import '../../css/login-page.css';
import '../../css/grid.css';

import Logo from '../../img/logo.png';
import emailImg from '../../img/mail.png';
import pass from '../../img/password.png';
import facebook from '../../img/facebook.png';
import google from '../../img/google.png';

import Button from '../../components/Button';
import Image from '../../components/Image';
import Background from '../../components/Background';

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
  async function handleSignInWithGoogle(){
    await dispatch(signinWithGoogle());
  }

  async function handleSignInWithFacebook() {
    await dispatch(signInWithFacebook());
  }

  return (
    <Background>
      <div className="div-logo">
        <Image src={Logo} alt="Logo Barba de Homem" />
      </div>

      <div className="div-login">
        {errMessage && <span className="err-message">{errMessage}</span>}

        <div className="float">
          <div className="login-password-img">
            <Image src={emailImg} alt="email" />
          </div>

          <div className="div-input">
            <input
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="float">
          <div className="login-password-img">
            <Image src={pass} alt="email" />
          </div>

          <div className="div-input">
            <input
              type="password"
              placeholder="Senha"
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>

      <div className="forgot-password">
        {/* Necessário trocar a tag "a" por link depois que tiver as rotas */}
        <Link className="link" to="/forgotmypass">
          Esqueceu sua senha?
        </Link>
      </div>

      <div className="div-cadastros">
        <div className="float register-img">
          <div>
            {/* Necessário trocar para link para fazer o redirecionamento pra api do google */}
            <button onClick= {handleSignInWithGoogle}><Image src={google} alt="google"/></button>
          </div>

          <div>
            {/* Necessário trocar para link para fazer o redirecionamento pra api do facebook */}
            <Image
              src={facebook}
              alt="facebook"
              onClick={handleSignInWithFacebook}
            />
          </div>
        </div>

        {/* Fazer evento para quando clicar fazer login */}
        <Button classe="button" text={'Logar'} event={handleLogin} />

        <div className="cadastrar">
          {/* Necessário trocar a tag "a" por link depois que tiver as rotas */}
          <Link to="/register">Cadastrar</Link>
        </div>
      </div>
    </Background>
  );
}
