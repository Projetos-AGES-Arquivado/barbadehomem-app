import React from 'react';

import '../css/button.css';

export default function Image(props) {
    return (
        <React.Fragment>
            <img className={props.classe} src={props.src} alt={props.alt} />
        </React.Fragment>
    )
}