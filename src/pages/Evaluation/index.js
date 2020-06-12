import React from 'react';
import { useHistory,useLocation} from 'react-router-dom';
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
    const location = useLocation();

    const[numStars,setStars] = useState('');
    const[comment,setComment] = useState('');
    const[err,setErr] = useState('');

    const [comment1,setComment1] = useState('');
    const [comment2,setComment2] = useState('')
    const [comment3,setComment3] = useState('')

    const names = location.state.names;
    


    const handleGoBack = e=>{
        history.goBack();
        e.preventDefault();
    }
    const handleSubmit = e=>{

        setComment(comment1+comment2+comment3) 
        
        if(numStars!='' && comment!=''){
            console.log(numStars)
            console.log(comment)
        }else{
            setErr('Para prosseguir avalie o barbeiro');
        }
    }

    return (
        <div className="Evaluation-container">
          <header className="header-Evaluation">
            <FiCornerDownLeft size={25} onClick={handleGoBack} />
            <h1></h1>
          </header>

            <span className = 'err-message'>{err}</span>
            <span>Como foi sua expêriencia com</span>           
            <span className = 'nome'> {names}</span>
            <div className = "rating">
                <input type = "radio" name="star" id ="star1" value = {5} onClick ={e=> setStars(e.target.value)} /><label htmlFor = "star1">
                </label>
                <input type = "radio" name="star" id ="star2" value = {4} onClick ={e=> setStars(e.target.value)} /><label htmlFor = "star2">
                </label>
                <input type = "radio" name="star" id ="star3" value = {3} onClick ={e=> setStars(e.target.value)}/><label htmlFor = "star3">
                </label>
                <input type = "radio" name="star" id ="star4" value ={2}  onClick ={e=> setStars(e.target.value)} /><label htmlFor = "star4">
                </label>
                <input type = "radio" name="star" id ="star5" value ={1}  onClick ={e=> setStars(e.target.value)}/><label htmlFor = "star5">
                </label>
            </div>

          <div className="div_input" value = {comment1+comment2+comment3} onChange ={e=> setComment(e.target.value)}>
            <Input type = 'text' maxLength="30"  onChange ={e=> setComment1(e.target.value)}/>
            <Input type = 'text' maxLength="30" onChange ={e=> setComment2(e.target.value)}/>
            <Input type = 'text' maxLength="30" onChange ={e=> setComment3(e.target.value)}/>
          </div>

          <div className="divbutton">
             <Button  type = 'submit' onClick={handleSubmit}>Submeter Avaliação</Button>
          </div>

        </div>  
    );
}
