import React from "react";
import { useHistory } from "react-router-dom";
import '../../css/home-page.css';
import '../../css/button.css'

export default function Home() {
  const history = useHistory();

  function handleProfile() {
    history.push("/home/profile");
  }

  function handleGoBack() {
    history.goBack();
  }

  function handleLogout() {
    handleGoBack();
  }

  function handleNothing() {
    ;
  }
  return (
      <div className="background">
        <div className="title"> <h1>Bem-Vindo, Usuário</h1></div>
        <div className="div-buttons">
          <button className="button"
            onClick={handleProfile}>Perfil
          </button>
          <button className="button"
            onClick={handleLogout}>Logout
          </button>          
        </div>
      </div>
  );
}
