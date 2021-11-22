import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={false} component={SignIn} path="/signin" exact />
          <PrivateRoute restricted={true} component={UserDetails} path="/UserDetails" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
