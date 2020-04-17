import React from 'react';
import Routes from './routes';
import Loading from './pages/Loading';
import { useSelector } from 'react-redux';

export default function App() {
  const isLoading = useSelector(state => state.general.isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return <Routes />;
}
