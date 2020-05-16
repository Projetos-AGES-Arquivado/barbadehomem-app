import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerAddress } from '../../store/auth/actions';
import './styles.css';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function RegisterAddress() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [street, setStreet] = useState('');
  const [num, setNum] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');

  function handleGoBack() {
    history.push('/register');
  }

  async function handleRegister(e) {
    e.preventDefault();

    await dispatch(registerAddress({ street, num, complement, district }));

    history.push('/home');
  }

  return (
    <div className="register-address-container">
      <header>
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
        <h1>Cadastre seu endereço</h1>
      </header>

      <p>No momento atendemos apenas na região de Porto Alegre.</p>

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
          Criar conta
        </Button>
      </form>
    </div>
  );
}
