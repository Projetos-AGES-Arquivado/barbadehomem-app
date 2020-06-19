import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { updateRate } from '../../store/provider/actions';
import { appointmentWasRated} from '../../store/appointment/actions';

import './styles.css';

export default function Evaluation() {
  const history = useHistory();
  const location = useLocation();

  const [stars, setStars] = useState('');
  const [err, setErr] = useState('');

  const [comment, setComment] = useState('');

  const { appointment } = location.state;

  const handleGoBack = () => {
    history.goBack();
  };
  const handleSubmit = () => {
    if (!stars) {
      setErr('Selecione pelo menos uma estrela.');
      return;
    } else {
      updateRate(appointment.provider.id, stars, comment);
      appointmentWasRated(appointment.id);
      history.push('/home/solicitations');
    }
  };

  return (
    <div className="Evaluation-container">
      <header className="header-Evaluation">
        <FiCornerDownLeft size={25} onClick={handleGoBack} />
      </header>
      <span className="err-message">{err}</span>
      <span>Como foi sua expêriencia com</span>
      <span className="nome"> {appointment.provider.name}</span>
      <div className="rating">
        <input
          type="radio"
          name="star"
          id="star1"
          value={5}
          onClick={e => setStars(e.target.value)}
        />
        <label htmlFor="star1"></label>
        <input
          type="radio"
          name="star"
          id="star2"
          value={4}
          onClick={e => setStars(e.target.value)}
        />
        <label htmlFor="star2"></label>
        <input
          type="radio"
          name="star"
          id="star3"
          value={3}
          onClick={e => setStars(e.target.value)}
        />
        <label htmlFor="star3"></label>
        <input
          type="radio"
          name="star"
          id="star4"
          value={2}
          onClick={e => setStars(e.target.value)}
        />
        <label htmlFor="star4"></label>
        <input
          type="radio"
          name="star"
          id="star5"
          value={1}
          onClick={e => setStars(e.target.value)}
        />
        <label htmlFor="star5"></label>
      </div>
      <div className="div_input">
        <Input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <div className="divbutton">
        <Button type="submit" onClick={handleSubmit}>
          Avaliar
        </Button>
      </div>
    </div>
  );
}
