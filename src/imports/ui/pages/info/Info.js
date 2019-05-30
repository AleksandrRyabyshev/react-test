import React from 'react';
import {Helmet} from "react-helmet";

class Info extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Info</title>
          <meta name="description" content="description info page" />
        </Helmet>

        <div className="container">
          <h1>Info page</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
