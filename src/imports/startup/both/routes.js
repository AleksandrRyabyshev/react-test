import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import Home from '../../ui/pages/home/Home';
import Info from '../../ui/pages/info/Info';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <Redirect to={ROUTES.SSR.HOME} />} />
    <Route exact path={ROUTES.SSR.HOME} render={() => <Home />} />
    <Route exact path={ROUTES.SSR.INFO} render={() => <Info />} />

  </React.Fragment>
);

export default Routes;

