import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AuthProvider } from "./Auth";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router>
          <Header />
          <div
            className="bg-gray-400 w-full "
            style={{ minHeight: "calc(100vh - 264px )" }}
          >
            <div className="select-none flex w-full justify-center items-center ">
              <h1 className="select-none m-4 p-4  text-xl   lg:text-3xl mx-auto text-black text-center rounded-lg">
                Sistema de Consulta CLAP - Mérida
              </h1>
            </div>
            {children}
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
};

export default Layout;
