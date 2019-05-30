import React, { Component } from 'react';
// import Home from '../ui/pages/home/Home';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Routes from './both/routes';
import Main from '../ui/layouts/main/Main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
