import React from 'react';
import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/auth/actions';
import { functioning, deals } from '../../utils';

import './styles.css';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);
  const alreadyRead = localStorage.getItem('alreadyRead');

  if (!alreadyRead) {
    handleInfo();
    localStorage.setItem('alreadyRead', 'true');
  }

  function handleCutRequest() {
    if (!user.phone) {
      Swal.fire('Complete seu cadastro!');
      history.push('/home/profile', { isScheduling: true });
    } else if (!user.address) {
      Swal.fire('Complete seu cadastro!');
      history.push('/home/profile/address', { isScheduling: true });
    } else {
      history.push('home/cutrequest');
    }
  }

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

  function handleDeals() {
    Swal.fire({
      title: 'Serviços',
      html: deals,
      confirmButtonText: 'Entendi',
    });
  }

  function handleInfo() {
    Swal.fire({
      title: 'Funcionamento',
      html: functioning,
      confirmButtonText: 'Entendi',
    });
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
        {/* <Button onClick={handleDeals}>Serviços e Promoções</Button> */}
        <Button onClick={handleInfo}>Funcionamento</Button>
        <Button onClick={handleProfile}>Perfil</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </nav>
    </div>
  );
}
