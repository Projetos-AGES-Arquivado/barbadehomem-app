import React from 'react';
import Loader from 'react-loader-spinner';
import Background from '../../components/Background';

export default function Loading() {
  return (
    <Background>
      <Loader
        className="center-loader"
        type="Circles"
        color="#FFFFFF"
        height="15%"
        width="15%"
        visible={true}
      />
    </Background>
  );
}
