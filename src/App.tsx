import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import TheHeader from './TheHeader';

function App() {
  return (
    <Router>
      <TheHeader />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </Router>
  );
}

export default App;
