import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
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
