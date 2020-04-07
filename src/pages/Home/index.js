import React from "react";
import '../../css/home-page.css';
import '../../css/button.css'

export default class Home extends React.Component {
  constructor(){
    super()
    this.handleProfile = this.handleProfile.bind(this);
    this.handleLogout  = this.handleLogout.bind(this);
  }

  handleProfile() {
    this.props.history.push('/home/profile');
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleLogout() {
    this.handleGoBack();
  }

  render(){
    return (
        <div className="background" alt="">
          <div className="title"> <h1>Bem-Vindo, Usuário</h1></div>
          <div className="div-buttons">
            <button className="button"
              onClick={this.handleProfile}>Perfil
            </button>
            <button className="button"
              onClick={this.handleLogout}>Logout
            </button>          
          </div>
        </div>
    );
  }
}
