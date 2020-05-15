import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';
import Loading from './pages/Loading';

export default function App() {
  const isLoading = useSelector(state => state.general.isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return <Routes />;
}
