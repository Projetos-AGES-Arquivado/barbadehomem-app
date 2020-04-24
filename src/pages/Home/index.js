import React from "react";
import '../../css/home-page.css';
import '../../css/button.css'
import '../../css/grid.css';
import Image from '../../components/Image'
import Background from '../../components/Background';
import Button from '../../components/Button';
import Silhueta from '../../img/silhueta.png';

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
        <Image src={Silhueta} alt="Silhueta"></Image>
      </div>

      <div className="title">
        <h3> Bem-vindo, {user.name} </h3>
      </div>

      <div className="div-buttons">
        <Button classe="button" text={'Solicitar Corte'} event={handleCutRequest} />
        <Button classe="button" text={'Avaliar Corte'} event={handleCutEvaluate} />
        <Button classe="button" text={'Perfil'} event={handleProfile} />
        <Button classe="button" text={'Logout'} event={handleLogout} />
      </div>
    </Background>
  );
}
