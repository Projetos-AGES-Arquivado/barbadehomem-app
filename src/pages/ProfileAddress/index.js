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
  const address = useSelector(store => store.user.addresses);
  console.log(address);

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

      {/* <form action="">
        <Input type="text" value={address.street} placeholder="Rua" />
        <Input type="text" value={address.number} placeholder="Nº" />
        <Input
          type="text"
          value={address.complement}
          placeholder="Complemento"
        />
        <Input type="text" value={address.district} placeholder="Bairro" />

        <Button type="submit">Salvar</Button>
      </form> */}
    </Container>
  );
}
