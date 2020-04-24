import React from "react";
import '../../css/home-page.css';
import '../../css/button.css'
import '../../css/grid.css';
import Image from '../../components/Image'
import Background from '../../components/Background';
import Logo from '../../img/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/auth/actions';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);

  function handleCutRequest() {

  }

  function handleCutEvaluate() {

  }

  async function handleLogout(event) {
    event.preventDefault();
    await dispatch(signOut());
    alert('Deslogado com sucesso!');
    history.push('/');
  }

  function handleProfile() {
    history.push('/home/profile');
  }

  return (
    <Background>
      <div className="logo">
        <Image src={Logo} alt="Logo"></Image>
      </div>

      <div className="title">
        <h1> Bem-vindo, {user.name} </h1>
      </div>

      <div className="div-buttons">
        <button className="button"
          onClick={handleCutRequest}>Solicitar Corte
        </button>
        <button className="button"
          onClick={handleCutEvaluate}>Avaliar Corte
        </button>
        <button className="button"
          onClick={handleProfile}>Perfil
        </button>
        <button className="button"
          onClick={handleLogout}>Logout
        </button>
      </div>

    </Background>
  );
}
