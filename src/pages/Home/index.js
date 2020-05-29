import React from 'react';
import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/auth/actions';

import './styles.css';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(store => store.auth.user);

  function handleCutRequest(e) {
    e.preventDefault();

    history.push('/home/cutrequest');
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
        <Button onClick={handleCutRequest}>Solicitar Serviço</Button>
        <Button onClick={handleSolicitations}>Minhas Solicitações</Button>
        <Button onClick={handleCutEvaluate}>Avaliar Corte</Button>
        <Button onClick={handleProfile}>Perfil</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </nav>
    </div>
  );
}
