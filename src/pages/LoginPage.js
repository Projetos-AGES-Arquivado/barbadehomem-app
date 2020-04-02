import React from 'react';

import '../css/login-page.css';
import '../css/grid.css';

import Logo from '../img/logo.png';
import email from '../img/mail.png';
import pass from '../img/password.png';
import facebook from '../img/facebook.png';
import google from '../img/google.png';

import Button from '../components/Button';
import Image from '../components/Image';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

  /* metodo que pega o evento Change e seta no state.username o valor da digitado no input */
  handleChangeUsername = (e) => {
    const username = e.target.value
    this.setState({
      username: username
    })
  }

  /* metodo que pega o evento Change e seta no state.password o valor da digitado no input */
  handleChangePassword = (e) => {
    const password = e.target.value
    this.setState({
      password: password
    })
  }

  render() {

    return (
      <div className="page-background">

        <div className="div-logo">
          <Image src={Logo} alt="Logo Barba de Homem" />
        </div>

        <div className="div-login">
          <div className="float">
            <div className="login-password-img">
              <Image src={email} alt="email" />
            </div>

            <div className="div-input">
              <input type="text" placeholder="Email" onChange={this.handleChangeUsername.bind(this)} />
            </div>
          </div>

          <div className="float">
            <div className="login-password-img">
              <Image src={pass} alt="email" />
            </div>

            <div className="div-input">
              <input type="password" placeholder="Senha" onChange={this.handleChangePassword.bind(this)} />
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
          <Button classe="button" type="button" text="Logar" />

          <div className="cadastrar">
            {/* Necessário trocar a tag "a" por link depois que tiver as rotas */}
            <a href="#">Cadastrar</a>
          </div>
        </div>

      </div>
    );

  }
}