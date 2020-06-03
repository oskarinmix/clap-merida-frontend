import React from "react";

import Home from "./components/Home";
import Admin from "./components/Admin";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Consulta from "./components/Consulta";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
        <Route path="/consulta" component={Consulta} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}
export default App;
