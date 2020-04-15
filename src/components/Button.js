import React from 'react';

import '../css/button.css';

export default function Button(props) {
  return (
    <React.Fragment>
      <button type={props.type} className={props.classe} onClick={props.event}>
        {props.text}
      </button>
    </React.Fragment>
  );
}
