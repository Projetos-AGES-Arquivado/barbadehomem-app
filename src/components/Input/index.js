import React from 'react';
import './styles.css';

const Input = ({ Icon = null, ...props }) => {
  return (
    <div className="input-container">
      {Icon && <Icon size={22} />}
      <input {...props} />
    </div>
  );
};

export default Input;
