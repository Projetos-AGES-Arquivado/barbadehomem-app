import React from 'react';

export default function Image(props) {
    return (
        <React.Fragment>
            <img className={props.classe} src={props.src} alt={props.alt} />
        </React.Fragment>
    )
}