import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './global.css';
import App from './App';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
