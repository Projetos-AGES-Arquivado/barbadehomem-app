import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { updatePassword } from '../../store/auth/actions';

import { FiCornerDownLeft } from 'react-icons/fi';
import Loader from 'react-loader-spinner';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TopMenuProfile from '../../components/TopMenuProfile';

import { Header, Container, LoaderContainer } from './styles';

import './styles.js';
export default function Profile() {
  const history = useHistory();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [tooltipMessage, setTooltipMessage] = useState('');
  const [tooltipClass, setTooptipClass] = useState('success-message');
  const [isSaving, setIsSaving] = useState(false);

  const handleGoBack = e => {
    history.push('/');
    e.preventDefault();
  };

  const handleResetPassword = async e => {
    e.preventDefault();

    const userPassword = {
      currentPassword,
      newPassword,
    };

    const schema = Yup.object().shape({
      currentPassword: Yup.string().required('Informe a senha atual.'),
      newPassword: Yup.string().min(
        6,
        'A senha precisa ter pelo menos 6 dígitos.'
      ),
    });

    try {
      await schema.validate(userPassword, {
        abortEarly: true,
      });

      if (newPassword !== confirmNewPassword) {
        setTooltipMessage('As senhas não são iguais.');
        setTooptipClass('err-message');
        return;
      }

      setIsSaving(true);

      await updatePassword({ currentPassword, newPassword });

      setTooltipMessage('Senha alterada.');
      setTooptipClass('success-message');
    } catch (err) {
      setTooptipClass('err-message');
      if (err instanceof Yup.ValidationError) {
        setTooltipMessage(err.message);
      } else if (err.code === 'auth/wrong-password') {
        setTooltipMessage('Senha atual incorreta.');
      }
      return;
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Container>
      <Header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Perfil</h1>
      </Header>

      <TopMenuProfile />

      {tooltipMessage && (
        <>
          <br />
          <span className={tooltipClass}>{tooltipMessage}</span>
        </>
      )}

      <form onSubmit={handleResetPassword}>
        <Input
          type="password"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          placeholder="Atual"
        />
        <Input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="Nova senha"
        />
        <Input
          type="password"
          value={confirmNewPassword}
          onChange={e => setConfirmNewPassword(e.target.value)}
          placeholder="Confirmar senha"
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
