import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ForgotMyPass from './pages/ForgotMyPass';
import RegisterAddress from './pages/RegisterAddress';

export default function routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Logon } />
        <Route path="/register" component={ Register } />
        <Route path="/register/address" component={ RegisterAddress } />
        <Route path="/profile" component={ Profile } />
        <Route path="/forgotmypass" component={ ForgotMyPass } />
      </Switch>
    </BrowserRouter>
  );
}
