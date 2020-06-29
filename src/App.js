import React from "react";
// COMPONENTS
import Home from "./components/Home";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Consulta from "./components/Consulta";
import Layout from "./components/Layout";
// ROUTES
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin}></Route>
        <Route path="/consulta" component={Consulta} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}
export default App;
