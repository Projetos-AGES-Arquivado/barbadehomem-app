import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  function handleProfile() {
    history.push('/home/profile');
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <h1>Estou na tela home (principal)</h1>
      <button onClick={handleGoBack}>Sair</button>
      <button onClick={handleProfile}>Ir para perfil</button>
    </div>
  );
}
