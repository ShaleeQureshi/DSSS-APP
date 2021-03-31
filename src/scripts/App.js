import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import history from "./history";

import { AuthProvider } from "./auth/auth";
import PrivateRoute from "./auth/private-route";

// Importing Views
import IndexApp from "../views/index";
import InstagramApp from "../views/instagram";
import LoginApp from "../views/login";
import ProfileApp from "../views/profile";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/DSSS-APP/">
        <Switch>
          <Route path={["/", "/home", "/index"]} exact component={IndexApp} />
          <Route
            path={["/signin", "/sign-in", "/login"]}
            exact
            component={LoginApp}
          />
          <Route path="/ig/:id" exact component={InstagramApp} />
          <PrivateRoute path="/profile" exact component={ProfileApp} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
