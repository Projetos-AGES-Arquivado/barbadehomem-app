import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Logon() {
  const history = useHistory();

  async function handleLogon(e) {
    //Método para evitar que a página recarregue com o form
    e.preventDefault();

    history.push("/home");
  }

  return (
    <div>
      <section>
        <form onSubmit={handleLogon}>
          <button type="submit">Entrar</button>
          <ul>
            <li>
              <Link to="/register">Não tenho cadastro</Link>
            </li>
            <li>
              <Link to="/forgotmypass">Esqueci minha senha</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}
