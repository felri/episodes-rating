import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Home from 'screens/Home'
import Chart from 'screens/Chart'
import PageNotFound from 'screens/PageNotFound'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route path="/chart/:search">
              <Chart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='*' exact={true}>
              <PageNotFound />
            </Route>
          </AnimatedSwitch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
