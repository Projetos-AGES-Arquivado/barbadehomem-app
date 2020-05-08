import React from 'react';
import '../../css/home-page.css';
import '../../css/button.css';
import '../../css/grid.css';
import Image from '../../components/Image';
import Logo from '../../img/logo.png';
import ProfilePhoto from '../../img/default_photo.png';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../store/auth/actions';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);

  function handleCutRequest() {}

  function handleCutEvaluate() {}

  async function handleLogout(event) {
    event.preventDefault();
    await dispatch(signOut());
    history.push('/');
  }

  function handleProfile() {
    history.push('/home/profile');
  }

  return (
    <div className="background" alt="">
      <div className="logo">
        <Image src={Logo} alt="Logo"></Image>
      </div>

      <div className="profile-photo">
        <Image src={ProfilePhoto} alt="Profile photo"></Image>
      </div>

      <div className="title">
        <h1> Bem-vindo, {user.name} </h1>
      </div>

      <div className="div-buttons">
        <button className="button" onClick={handleCutRequest}>
          Solicitar Corte
        </button>
        <button className="button" onClick={handleCutEvaluate}>
          Avaliar Corte
        </button>
        <button className="button" onClick={handleProfile}>
          Perfil
        </button>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
