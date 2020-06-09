import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

export default function Evaluation() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoBack = e=>{
        history.goBack();
        e.preventDefault();
    }

    return (
        <div className="Evaluation-container">
          <header className="header-register">
            <FiCornerDownLeft size={25} onClick={handleGoBack} />
            <h1>Avalie sua experiencia</h1>
          </header>
        </div>  
    );
}
