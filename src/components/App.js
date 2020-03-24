import { Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Hello from './Hello';
import Home from '../pages/HomePage';
import Header from './Header';

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Fragment>
);

export default App;
