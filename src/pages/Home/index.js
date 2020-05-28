import React from 'react';
import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut, fetchUser, receiveAddress } from '../../store/auth/actions';
import { registerUser } from '../../store/auth/actions';

import './styles.css';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(store => store.auth.user);
  const address = user?.adresses;

  async function handleCutRequest() {
    //Caso não exista endereço cadastrado, destina a página de cadastro de endereço
    if(!address){
        history.push('/register/address');
    }

  }

  function handleCutEvaluate() {}

  function handleSolicitations(e) {
    e.preventDefault();

    history.push('/home/solicitations');
  }

  async function handleLogout(e) {
    e.preventDefault();

    await dispatch(signOut());

    history.push('/');
  }

  function handleProfile() {
    history.push('/home/profile');
  }

  return (
    <div className="home-container">
      <header>
        <img src={Silhueta} alt="Logo Barba de Homem" />
        <h3> Bem-vindo, {user?.name} </h3>
      </header>

      <nav className="home-menu">
        <Button onClick={handleCutRequest}>Solicitar Corte</Button>
        <Button onClick={handleSolicitations}>Minhas Solicitações</Button>
        <Button onClick={handleCutEvaluate}>Avaliar Corte</Button>
        <Button onClick={handleProfile}>Perfil</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </nav>
    </div>
  );
}
