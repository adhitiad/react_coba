import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/reg">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
