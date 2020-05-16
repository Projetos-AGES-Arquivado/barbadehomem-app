import React from 'react';

import './styles.css';

const Button = ({ children, ...props }) => {
  return (
    <div className="button-container">
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
