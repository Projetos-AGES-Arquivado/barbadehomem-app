import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { registerAddress } from '../../store/auth/actions';

import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

export default function RegisterAddress() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [street, setStreet] = useState('');
  const [num, setNum] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [errMessage, setErrMessage] = useState('');

  function handleGoBack() {
    history.push('/register');
  }

  async function handleRegister(e) {
    e.preventDefault();

    const newUserAddress = {
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
      await schema.validate(newUserAddress, {
        abortEarly: true,
      });

      await dispatch(registerAddress(newUserAddress));

      history.push('/home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrMessage(err.message);

        return;
      }
    }
  }

  return (
    <div className="register-address-container">
      <header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Cadastre seu endereço</h1>
      </header>

      <p>No momento atendemos apenas na região de Porto Alegre.</p>

      {!!errMessage && <span className="err-message">{errMessage}</span>}

      <form>
        <Input
          type="text"
          value={street}
          onChange={e => setStreet(e.target.value)}
          placeholder="Rua"
        />

        <div className="additional-information">
          <div className="number">
            <Input
              type="number"
              value={num}
              onChange={e => setNum(e.target.value)}
              placeholder="Nº"
            />
          </div>

          <div>
            <Input
              type="text"
              value={complement}
              onChange={e => setComplement(e.target.value)}
              placeholder="Complemento"
            />
          </div>
        </div>

        <Input
          type="text"
          value={district}
          onChange={e => setDistrict(e.target.value)}
          placeholder="Bairro"
        />

        <Button type="submit" onClick={handleRegister}>
          Concluir Cadastro
        </Button>
      </form>
    </div>
  );
}
