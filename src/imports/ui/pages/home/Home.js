import React from 'react';
import logo from '../../../../../public/images/logo/logo.svg';
import '../../../ui/css/App.css';
import { ROUTES } from '../../../config/routes';

class Home extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href={ROUTES.SSR.INFO}> Info </a>

      </div>
    );
  }
}

export default Home;
