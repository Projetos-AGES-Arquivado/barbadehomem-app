import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../../store/auth/actions';

import '../../css/login-page.css';
import '../../css/grid.css';

import Logo from '../../img/logo.png';
import emailImg from '../../img/mail.png';
import pass from '../../img/password.png';
import facebook from '../../img/facebook.png';
import google from '../../img/google.png';

import Button from '../../components/Button';
import Image from '../../components/Image';

export default function LoginPage () {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleLogin(e) {
    e.preventDefault();

    try {
      await dispatch(authenticateUser({ email, password }));
      
      alert('Logado com sucesso!');
      
      history.push('/home');
    } catch (err) {
      alert(err);
    }
  }
  
  return (
    <div className="page-background">
    
    <div className="div-logo">
    <Image src={Logo} alt="Logo Barba de Homem" />
    </div>
    
    <div className="div-login">
    <div className="float">
    <div className="login-password-img">
    <Image src={emailImg} alt="email" />
    </div>
    
    <div className="div-input">
    <input type="text" placeholder="Email" onChange={e => setEmail(e.currentTarget.value)} />
    </div>
    </div>
    
    <div className="float">
    <div className="login-password-img">
    <Image src={pass} alt="email" />
    </div>
    
    <div className="div-input">
    <input type="password" placeholder="Senha" onChange={e => setPassword(e.currentTarget.value)} />
    </div>
    </div>
    
    </div>
    
    <div className="forgot-password">
    {/* Necessário trocar a tag "a" por link depois que tiver as rotas */}
    <a className="link" href="#">Esqueceu sua senha?</a>
    </div>
    
    <div className="div-cadastros">
    
    <div className="float register-img">
    <div>
    {/* Necessário trocar para link para fazer o redirecionamento pra api do google */}
    <Image src={google} alt="google" />
    </div>
    
    <div>
    {/* Necessário trocar para link para fazer o redirecionamento pra api do facebook */}
    <Image src={facebook} alt="facebook" />
    </div>
    </div>
    
    {/* Fazer evento para quando clicar fazer login */}
    <Button classe="button" text="Logar" event={handleLogin} />
    
    <div className="cadastrar">
    {/* Necessário trocar a tag "a" por link depois que tiver as rotas */}
    <a href="#">Cadastrar</a>
    </div>
    </div>
    
    </div>
    )
  }