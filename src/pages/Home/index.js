import React from "react";
import '../../css/home-page.css';
import '../../css/button.css'
import '../../css/grid.css';
import Image from '../../components/Image'
import Logo from '../../img/logo.png';
import ProfilePhoto from '../../img/default_photo.png';

export default class Home extends React.Component {
  constructor(){
    super()
    this.handleProfile = this.handleProfile.bind(this);
    this.handleLogout  = this.handleLogout.bind(this);
    this.handleCutEvaluate = this.handleCutEvaluate.bind(this);
    this.handleCutRequest = this.handleCutRequest.bind(this);
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

  handleCutEvaluate(){
    
  }

  handleCutRequest(){

  }

  render(){
    return (

        <div className="background" alt="">

          <div className="logo">
            <Image src={Logo} alt="Logo"></Image>
          </div>

          <div className="profile-photo">
            <Image src={ProfilePhoto} alt="Profile photo"></Image>
          </div>

          <div className="title"> <h1> Bem-Vindo, Usuário </h1> 
          
          </div>

          <div className="div-buttons">
            <button className="button"
              onClick={this.handleCutRequest}>Solicitar Corte
            </button> 
            <button className="button"
              onClick={this.handleCutEvaluate}>Avaliar Corte
            </button>      
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
