import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../store/auth/actions';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleProfile() {
    history.push('/home/profile');
  }

  function handleLogOut(e) {
    e.preventDefault();
    
    try {
      dispatch(signOutUser());
      history.push('/');
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div>
      <h1>Estou na tela home (principal)</h1>
      <button onClick={handleLogOut}>Logout</button>
      <button onClick={handleProfile}>Ir para perfil</button>
    </div>
  );
}
