import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { receiveUser } from '../../store/auth/actions';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TopMenuProfile from '../../components/TopMenuProfile';

import { Header, Container } from './styles';
import { birthdayParser, phoneParser } from '../../utils';

import './styles.js';
export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);
  const [updatedUser, setUpdatedUser] = useState(user || {});

  const handleGoBack = e => {
    history.push('/');
    e.preventDefault();
  };

  const handleUserUpdate = e => {
    e.preventDefault();

    console.log(updatedUser);
  };

  const updateField = e => {
    const { name, value } = e.target;
    setUpdatedUser(Object.assign({}, updatedUser, { [name]: value }));
  };

  return (
    <Container>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Perfil</h1>
      </Header>

      <TopMenuProfile />

      <form onSubmit={handleUserUpdate}>
        <Input
          type="text"
          value={updatedUser.name}
          onChange={updateField}
          placeholder="Nome"
          name="name"
        />
        <Input
          type="text"
          value={phoneParser(updatedUser.phone)}
          onChange={updateField}
          name="phone"
          placeholder="Telefone"
        />
        <Input
          type="text"
          value={birthdayParser(updatedUser.birthday)}
          onChange={updateField}
          name="birthday"
          placeholder="Nascimento"
        />
        <Input id="email" type="text" value={user.email} readOnly />

        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
}
