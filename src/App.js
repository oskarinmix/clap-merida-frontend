import React from "react";
// COMPONENTS
import Home from "./components/Home";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Consulta from "./components/Consulta";
import Layout from "./components/Layout";
import { AuthProvider } from "./components/Auth";

import { BrowserRouter as Router } from "react-router-dom";
// ROUTES
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
            <Route path="/consulta" component={Consulta} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
export default App;
