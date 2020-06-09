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
            
            <div class = "rating">
                <input type = "radio" name ="star" id ="star1" /><label for = "star1">
                </label>
                <input type = "radio" name ="star" id ="star2" /><label for = "star2">
                </label>
                <input type = "radio" name ="star" id ="star3" /><label for = "star3">
                </label>
                <input type = "radio" name ="star" id ="star4" /><label for = "star4">
                </label>
                <input type = "radio" name ="star" id ="star5" /><label for = "star5">
                </label>
            </div>

          <div className="div_input">
            <span>Comente ou sugira algo que possamos melhorar</span>
            <Input type = 'text'/>
          </div>

          <div className="divbutton">
             <Button>Submeter Avaliação</Button>
          </div>

        </div>  
    );
}
