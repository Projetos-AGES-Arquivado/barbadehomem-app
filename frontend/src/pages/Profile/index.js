import React from "react";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Estou na tela de perfil do usuário</h1>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
}
