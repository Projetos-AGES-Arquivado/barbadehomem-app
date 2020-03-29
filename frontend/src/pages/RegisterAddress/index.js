import React from "react";
import { useHistory } from "react-router-dom";

export default function RegisterAddress() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Estou na tela de cadastro de endereço</h1>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
}
