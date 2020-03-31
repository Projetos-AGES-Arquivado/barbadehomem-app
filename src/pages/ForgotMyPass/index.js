import React from "react";
import { useHistory } from "react-router-dom";

export default function ForgotMyPass() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Estou no Esqueci minha senha</h1>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
}
