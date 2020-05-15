import React from 'react';
import ReactDOM from 'react-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import * as serviceWorker from './plugins/serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
