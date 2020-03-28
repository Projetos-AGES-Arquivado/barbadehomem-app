import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Logon() {
  const history = useHistory();

  function handleLogon() {
    history.push('/profile');
  }

  function handleRegister() {
    history.push('/register');
  }


  return(
    <h1>Página inicial do app: Tela de Login</h1>
  );
}