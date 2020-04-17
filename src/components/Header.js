import React from 'react';
import Image from './Image';

import Silhueta from '../img/silhueta.png'

export default function Header(props) {
    return (
        <React.Fragment>
            <div className="header">
                <div className="row">
                    <div className="col col-3 div-img-header">
                        <Image classe="img-header" src={Silhueta} alt="Silhueta barba de Homem" />
                    </div>
                    <div className="col col-8 ">
                        <h2>{props.text}</h2>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
