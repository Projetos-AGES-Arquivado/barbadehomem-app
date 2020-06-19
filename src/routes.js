import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProfileAddress from './pages/ProfileAddress';
import ProfileSecret from './pages/ProfileSecret';
import ForgotMyPass from './pages/ForgotMyPass';
import RegisterAddress from './pages/RegisterAddress';
import Appointments from './pages/Appointments';
import Home from './pages/Home';
import CutRequest from './pages/CutRequest';
import CutRequestPickBarber from './pages/CutRequestPickBarber';
import Evaluation from './pages/Evaluation'

function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector(state => state.auth.user);
  const render = props => {
    if (user) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };
  return <Route {...rest} render={render} />;
}

function UnauthRoute({ component: Component, ...rest }) {
  const user = useSelector(state => state.auth.user);
  const render = props => {
    if (!user) {
      return <Component {...props} />;
    }
    return <Redirect to="/home" />;
  };
  return <Route {...rest} render={render} />;
}

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <UnauthRoute path="/" exact component={Login} />
        <UnauthRoute path="/forgotmypass" component={ForgotMyPass} />

        <UnauthRoute path="/register" exact component={Register} />
        <Route path="/register/address" component={RegisterAddress} />

        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/home/solicitations" component={Appointments} />

        <PrivateRoute path="/home/profile" exact component={Profile} />
        <PrivateRoute path="/home/profile/address" component={ProfileAddress} />
        <PrivateRoute path="/home/profile/secret" component={ProfileSecret} />

        <PrivateRoute path="/home/cutrequest" exact component={CutRequest} />
        <PrivateRoute path="/home/cutrequest/pickbarber" component={CutRequestPickBarber}/>
        <PrivateRoute path="/home/evaluation" component={Evaluation}/>
        <Route path="/register/address" component={RegisterAddress} />
      </Switch>
    </BrowserRouter>
  );
}
