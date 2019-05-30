import React from 'react';
import { Helmet } from 'react-helmet';
// import logo from '../../../../../public/images/logo/logo.svg';
import '../../../ui/css/App.css';
import { ROUTES } from '../../../config/routes';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="description home page" />
        </Helmet>

        <div>
          <h1>Home page</h1>
          <a href={ROUTES.SSR.INFO}> Info </a>
          {/*<Link to='/ua/info'> Info </Link>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
