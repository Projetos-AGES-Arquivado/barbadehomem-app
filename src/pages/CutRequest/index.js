import React from 'react';
// import Button from '../../components/Button';
// import Silhueta from '../../img/silhueta.png';

// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import Button from '../../components/Button';

import './styles.css';
import { Checkbox } from 'antd';

export default function CutRequest() {
    const history = useHistory();
    //   const dispatch = useDispatch();
    //   const user = useSelector(store => store.auth.user);
    const handleGoBack = e => {
        history.goBack();
        e.preventDefault();
    };
    const handleCutRequestPickBarber = e => {

        history.push("/home/cutrequest/pickbarber");
    }



    return (
        <div className = "CutRequest-container">  
            <header className="header-CutRequest">
                <FiCornerDownLeft size={25} onClick={handleGoBack} />
                <h1>Solicitar Corte</h1>
            </header>
            <form className = 'forminput'>
                <input type = "checkbox"/>
                <label>Corte</label>
                <text className = 'text'>25$</text>
            </form>
            <form className = 'forminput'>
                <input type = "checkbox"/>
                <label>Barba</label>
                <text className = 'text'>25$</text>
            </form>
            <form className = 'forminput'>
                <input type = "checkbox"/>
                <label>Corte & Barba</label>
                <text className = 'text_CB'>50$</text>
            </form>
            <form className ='formbutton'>
                <Button onClick={handleCutRequestPickBarber}>Próximo</Button>
            </form>    
        </div>
    );
}
