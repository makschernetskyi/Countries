import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Countries } from "components/Countries";

import {Country} from 'components/Country'


const NoMatch = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <Router>
    <Switch>

        <Route path="/" component={Countries} exact />
        <Route path="/info/:countryName" component={Country}/>

        <Route component={NoMatch} />
    </Switch>
  </Router>
);

export { App };
