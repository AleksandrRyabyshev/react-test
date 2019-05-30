import React from 'react';
import { Helmet } from 'react-helmet';
// import { ROUTES } from '../../../config/routes';

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="description" />
        </Helmet>

        <div className="container">
          <h1>Login page</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
