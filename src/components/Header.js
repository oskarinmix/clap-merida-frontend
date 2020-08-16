import React from "react";
import corpomerida from "../img/corpomerida.png";
import clap from "../img/clap.png";
import gobierno from "../img/gobierno.png";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import App from "../auth/auth";
const Header = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <div className="select-none h-32 w-full bg-red-700 flex items-center justify-between">
        <img
          className="select-none  w-24 md:w-32 lg:w-48  h-auto overflow-visible mx-4 py-4"
          src={gobierno}
          alt="Gobierno"
        />
        <img
          className="select-none  w-24 md:w-32 lg:w-48 h-auto overflow-visible mx-4 py-4"
          src={corpomerida}
          alt="CorpoMerida"
        />
        <img
          className="select-none  w-24 md:w-32 lg:w-48 h-auto overflow-visible mx-4 py-4"
          src={clap}
          alt="Clap Merida"
        />
      </div>
      <div className="bg-red-400 text-white flex justify-between items-center py-2">
        <Link
          to={"/"}
          className=" p-2 lg:px-10 bg-red-800 hover:bg-red-700 mx-2"
        >
          Inicio
        </Link>
        <div>
          {currentUser && (
            <React.Fragment>
              <Link
                to={"/admin"}
                className=" p-2 lg:px-10 bg-red-800 hover:bg-red-700 mx-2"
              >
                Administrador
              </Link>
              <button
                onClick={() => App.auth().signOut()}
                className=" py-1 lg:px-10 bg-red-800 hover:bg-red-700 mx-2"
              >
                Cerrar Sesión
              </button>
            </React.Fragment>
          )}
          <Link
            to={"/consulta"}
            className=" p-2 lg:px-10 bg-red-800 hover:bg-red-700 mx-2"
          >
            Consulta
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
