import React, { Component } from 'react';
import Home from '../ui/pages/home/Home';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Routes from './both/routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Home>
            <Routes />
          </Home>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
