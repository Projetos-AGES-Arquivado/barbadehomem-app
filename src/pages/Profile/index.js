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
  const user = useSelector(store => store.auth.user);

  const handleGoBack = e => {
    history.push('/');
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Perfil</h1>
      </Header>

      <TopMenuProfile />

      <form action="">
        <Input type="text" value={user.name} placeholder="Nome" />
        <Input type="text" value={user.phone} placeholder="Telefone" />
        <Input type="text" value={user.birthday} placeholder="Nascimento" />
        <Input id="email" type="text" value={user.email} readOnly />

        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
}
