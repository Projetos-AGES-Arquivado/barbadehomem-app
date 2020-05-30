import React from "react";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Promoções e Funcionamento</h1>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
}
