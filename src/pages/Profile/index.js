import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import { FiCornerDownLeft } from 'react-icons/fi';

import { updateUser } from '../../store/auth/actions';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TopMenuProfile from '../../components/TopMenuProfile';

import { Header, Container, LoaderContainer } from './styles';
import { phoneParser } from '../../utils';

import './styles.js';
export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const isScheduling = location.state?.isScheduling;

  const user = useSelector(store => store.auth.user);

  const [name, setName] = useState(user.name);
  const email = user.email;
  const [birthday, setBirthday] = useState(user.birthday || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [isSaving, setIsSaving] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const handleGoBack = e => {
    history.push('/');
    e.preventDefault();
  };

  const handleUserUpdate = async e => {
    e.preventDefault();

    const updatedUser = {
      id: user.id,
      name,
      email,
      birthday,
      phone,
    };

    const schema = Yup.object().shape({
      phone: Yup.string().length(15, 'Digite um telefone válido.'),
      birthday: Yup.string().required('Digite uma data válida.'),

      name: Yup.string().required('Nome obrigatório.'),
    });

    try {
      await schema.validate(updatedUser, {
        abortEarly: true,
      });

      setErrMessage('');

      setIsSaving(true);

      await dispatch(updateUser(updatedUser));

      if (isScheduling) {
        history.push('/home/profile/address', { isScheduling });
      }

      setIsSaving(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrMessage(err.message);
        return;
      }
    }
  };

  return (
    <Container>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Perfil</h1>
      </Header>

      <TopMenuProfile />

      {!!errMessage && (
        <>
          <br /> <span className="err-message">{errMessage}</span>
        </>
      )}

      <form onSubmit={handleUserUpdate}>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
          name="name"
        />
        <Input
          type="text"
          value={phoneParser(phone)}
          onChange={e => setPhone(e.target.value)}
          name="phone"
          placeholder="Telefone"
        />
        <Input
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          name="birthday"
          placeholder="Nascimento"
        />
        <Input id="email" type="text" value={email} readOnly />

        {isSaving ? (
          <LoaderContainer>
            <Loader type="TailSpin" color="#fff" />
          </LoaderContainer>
        ) : (
          <Button type="submit">Salvar</Button>
        )}
      </form>
    </Container>
  );
}
