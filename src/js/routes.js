import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/smart/AppComponent';
import Home from './components/smart/HomeComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
