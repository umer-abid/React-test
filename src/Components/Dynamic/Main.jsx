import React from "react";
// import { Home } from "./views/Home";
// import { About } from "./views/About";
import Conference from "./Pages/Conference/Conference";
import Registration from "./Pages/Registration/Registration";
import Travel from "./Pages/Travel/Travel";
import NestedNav from "./Pages/NestedNav/NestedNav";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <div>
        <NestedNav />
        <Switch>
          <Route exact path="/Conference" component={Conference} />
          <Route exact path="/">
            <Redirect to="/Conference" />
          </Route>
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Travel" component={Travel} />
        </Switch>
      </div>
    </Router>
  );
}
