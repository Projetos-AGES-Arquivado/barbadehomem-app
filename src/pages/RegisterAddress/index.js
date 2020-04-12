import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerAddress } from '../../store/auth/actions';

export default function RegisterAddress() {
  const history = useHistory();
  const dispatch = useDispatch();
  const res = useSelector(state => state.auth);

  useEffect(() => {
    console.log(res);
  }, [res]);

  const [street, setStreet] = useState('');
  const [num, setNum] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function handleGoBack() {
    history.push('/register');
  }

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await dispatch(
        registerAddress({ street, num, complement, district, city, uf })
      );
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Rua"
              value={street}
              onChange={e => setStreet(e.target.value)}
            />
          </li>
          <li>
            <input
              type="number"
              placeholder="Nº"
              value={num}
              onChange={e => setNum(e.target.value)}
            />
            <input
              type="text"
              placeholder="Comp"
              value={complement}
              onChange={e => setComplement(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Bairro"
              value={district}
              onChange={e => setDistrict(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
            <button type="submit">Registrar</button>
          </li>
        </ul>
      </form>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
}
