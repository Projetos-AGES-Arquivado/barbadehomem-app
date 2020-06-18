import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { updateAddress } from '../../store/auth/actions';

import { FiCornerDownLeft } from 'react-icons/fi';
import Loader from 'react-loader-spinner';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TopMenuProfile from '../../components/TopMenuProfile';

import { Header, Container, LoaderContainer } from './styles';

import './styles.js';
export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const address = useSelector(store => store.auth.user.address);

  const isScheduling = location.state?.isScheduling;

  const [street, setStreet] = useState(address?.street || '');
  const [num, setNum] = useState(address?.num || '');
  const [complement, setComplement] = useState(address?.complement || '');
  const [district, setDistrict] = useState(address?.district || '');

  const [isSaving, setIsSaving] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const handleGoBack = e => {
    e.preventDefault();
    history.push('/');
  };

  async function handleAddressUpdate(e) {
    e.preventDefault();

    const updatedAddress = {
      street,
      num,
      complement,
      district,
    };

    const schema = Yup.object().shape({
      district: Yup.string().required('Informe o bairro.'),
      complement: Yup.string().optional(),
      num: Yup.string().required('Informe o número.'),
      street: Yup.string().required('Informe a rua.'),
    });

    try {
      await schema.validate(updatedAddress, {
        abortEarly: true,
      });

      setErrMessage('');

      setIsSaving(true);

      await dispatch(updateAddress(updatedAddress));

      if (isScheduling) {
        history.push('/home/cutrequest');
      }

      setIsSaving(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrMessage(err.message);
        return;
      }
    }
  }

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

      <form onSubmit={handleAddressUpdate}>
        <Input
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
          placeholder="Rua"
        />
        <Input
          type="text"
          value={num}
          onChange={e => setNum(e.target.value)}
          placeholder="Nº"
        />
        <Input
          type="text"
          value={complement}
          onChange={e => setComplement(e.target.value)}
          placeholder="Complemento"
        />
        <Input
          type="text"
          value={district}
          onChange={e => setDistrict(e.target.value)}
          placeholder="Bairro"
        />

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
