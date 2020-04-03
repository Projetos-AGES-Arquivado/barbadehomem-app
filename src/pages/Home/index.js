import React from "react";
import { useHistory } from "react-router-dom";
import '../../css/home-page.css';

export default function Home() {
  const history = useHistory();

  function handleProfile() {
    history.push("/home/profile");
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="background">
      <h1>Bem-Vindo, Usuário</h1>
      <button onClick={handleGoBack}>Logout</button>
      <button onClick={handleProfile}>Ir para perfil</button>
    </div>
  );
}
