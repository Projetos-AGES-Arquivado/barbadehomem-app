import React from 'react';
import Routes from './routes';
import Loader from './pages/Loader';
import { useSelector } from 'react-redux';

import './global.css';

export default function App() {
  const isLoading = useSelector(state => state.general.isLoading);
  if (isLoading) {
    return <Loader />;
  }
  return <Routes />;
}
