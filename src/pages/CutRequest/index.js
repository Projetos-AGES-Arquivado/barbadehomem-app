import React,{useState} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';
import  '../../global.css'
import './styles.css';

export default function CutRequest() {

    const [service,setService] = useState('');
    const [value,setValue]= useState('');
    const [errMessage, setErrMessage] = useState('');


    const history = useHistory();
    //   const dispatch = useDispatch();
    //   const user = useSelector(store => store.auth.user);
    const handleGoBack = e => {
        
        history.goBack();
        e.preventDefault();
    };
    const handleCutRequestPickBarber = e => { 
        e.preventDefault()
       if(!handleCheckbox()){
            return setErrMessage('Escolha apenas uma das opcões abaixo')
        }else{

           history.push("/home/cutrequest/pickbarber");
       }
    }

    function handleCheckbox(){
        var cont = 0;
        if(document.getElementById('Corte').checked){
            setService('Corte')
            setValue('25')
            cont++;
        }
        if(document.getElementById('Barba').checked){
            setService('Barba')
            setValue('25')
            cont++;
        }
        if(document.getElementById('Corte&Barba').checked){
            setService('Corte&Barba')
            setValue('50')
            cont++;
        }
        if(cont!=1){
            return false
        }
        return true

    }
    function handleClick(e){
        document.getElementById(e).click() 
    }

    return (
        <div className = "CutRequest-container">  
            <header className="header-CutRequest">
                <FiCornerDownLeft size={25} onClick={handleGoBack} />
                <h1>Solicitar Corte</h1>
            </header>

            <span className = 'err-message'>{errMessage}</span>

            <form className = 'forminput' onClick = {e=> handleClick(e = 'Corte')}>
                <input type = "checkbox" id ='Corte'/>
                <label>Corte -</label>
                <span className = 'text'>25$</span>
            </form>

            <form className = 'forminput' onClick = {e=> handleClick(e = 'Barba')}>
                <input type = "checkbox" id = 'Barba' />
                <label>Barba -</label>
                <span className = 'text'>25$</span>
            </form>

            <form className = 'forminput' onClick = {e=> handleClick(e = 'Corte&Barba')}>
                <input type = "checkbox" id = 'Corte&Barba'/>
                <label>Corte & Barba -</label>
                <span className = 'text_CB'>50$</span>
            </form>

            <form className ='formbutton'>
                <Button onClick={handleCutRequestPickBarber}>Agendar horário</Button>
            </form>    
        </div>
    );
}
