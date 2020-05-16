import React from 'react';
import Loader from 'react-loader-spinner';
import './styles.css';

export default function Loading() {
  return (
    <div className="loader-container">
      <Loader
        color="#fff"
        type="Circles"
        height="15%"
        width="15%"
        visible={true}
      />
    </div>
  );
}
