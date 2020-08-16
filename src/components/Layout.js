import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Layout;
