import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './scenes/home';
import Fancy from './scenes/fancy';
import Admin from './scenes/admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/fancy">
            <Fancy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
