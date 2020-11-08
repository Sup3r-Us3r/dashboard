import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from '../src/pages/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
