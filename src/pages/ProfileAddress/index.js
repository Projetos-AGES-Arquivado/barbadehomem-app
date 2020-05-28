import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FiCornerDownLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TopMenuProfile from '../../components/TopMenuProfile';

import { Header, Container } from './styles';

import './styles.js';
export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const address = useSelector(store => store.auth.user.addresses[0]);

  const handleGoBack = e => {
    e.preventDefault();
    history.push('/');
  };

  function handleUserUpdate(e) {
    e.preventDefault();

    console.log(address);
  }

  return (
    <Container>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Perfil</h1>
      </Header>

      <TopMenuProfile />

      <form onSubmit={handleUserUpdate}>
        <Input type="text" value={address.street} placeholder="Rua" />
        <Input type="text" value={address.num} placeholder="Nº" />
        <Input
          type="text"
          value={address.complement}
          placeholder="Complemento"
        />
        <Input type="text" value={address.district} placeholder="Bairro" />

        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
}
