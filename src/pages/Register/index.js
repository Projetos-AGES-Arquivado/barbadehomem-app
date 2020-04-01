import React from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  function handleRegisterAddress(e) {
    //Método para evitar que a página recarregue com o form
    e.preventDefault();

    history.push("register/address");
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Estou na tela de cadastro</h1>
      <form onSubmit={handleRegisterAddress}>
        <button onClick={handleGoBack}>Voltar</button>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
}
