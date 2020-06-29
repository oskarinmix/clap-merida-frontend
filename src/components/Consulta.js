import React, { useState } from "react";
import axios from "axios";

// COMPONENTS
import Resultado from "./Resultado";
import Bouncer from "./Bouncer";
// STYLES
import "./consulta.css";

const Consulta = () => {
  const [cedula, setCedula] = useState("");
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [persona, setPersona] = useState([]);
  const [buscando, setBuscando] = useState(false);

  React.useEffect(() => {
    const validateCedula = () => {
      const validacion = new RegExp(/^\d{1,8}$/);
      if (!validacion.test(cedula)) {
        setCedula(cedula.slice(0, -1));
      }
    };
    setBuscando(false);
    validateCedula();
  }, [cedula]);

  const updateInput = (e) => {
    setCedula(e.target.value);
    setError(false);
    setMostrar(false);
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      consultar();
    }
  };

  const consultar = async () => {
    setBuscando(true);
    setMostrar(false);
    setPersona([]);
    if (cedula.length === 0) {
    } else {
      const resp = await axios.get(
        `https://clapmerida-be.herokuapp.com/busqueda/coleccion/personas/${cedula}`
        //`http://localhost:3001/busqueda/coleccion/personas/${cedula}`
      );

      if (resp.data.personas[0]) {
        const finaldata = await axios.post(
          // `http://localhost:3001/clap/search/`,
          `https://clapmerida-be.herokuapp.com/clap/search`,
          {
            municipio: resp.data.personas[0].municipio,
            parroquia: resp.data.personas[0].parroquia,
            nombre: resp.data.personas[0].clap,
          }
        );
        const clap = finaldata.data.clap[0];
        if (clap) {
          console.log(clap);
          var persona = resp.data.personas[0];
          persona.fecha = clap.distribucion;
          console.log(persona);
          setPersona(persona);
        }

        setBuscando(false);
        setMostrar(true);
      } else {
        setBuscando(false);
        setError(true);
      }
    }
  };

  return (
    <div className="p-10 container mx-auto flex justify-center flex-col bg-gray-300">
      <div className=" m-auto flex flex-col w-full md:w-1/2">
        <label
          htmlFor="cedula"
          className="p-2 md:px-4 md:py-2 text-white  text-lg md:text-2xl my-2 bg-gray-800 rounded-md"
        >
          Cédula de Identidad a Consultar
        </label>
        <div className="cedula-group flex justify-center items-center bg-white">
          <div className="px-5 text-lg font-bold">V-</div>
          <input
            id="cedula"
            className="w-full p-4 pl-4 text-lg font-bold focus:outline-none"
            onChange={(e) => updateInput(e)}
            onKeyUp={(e) => enterKey(e)}
            value={cedula}
            autoComplete={"off"}
          />
        </div>
        <button
          className={
            !cedula.length > 0
              ? "bg-gray-800 my-2 p-4  rounded-lg text-center text-white cursor-pointer"
              : "bg-red-700 my-2 p-4  rounded-lg text-center text-white cursor-pointer"
          }
          onClick={consultar}
          disabled={cedula.length === 0}
        >
          Consultar
        </button>
      </div>

      {buscando && <Bouncer />}
      {mostrar ? (
        <Resultado persona={persona} />
      ) : error ? (
        <div className="text-center text-2xl">
          La Cédula de Identidad no se encuentra registrada como Jefe de Familia
          en algún CLAP del Estado Mérida
        </div>
      ) : null}
    </div>
  );
};

export default Consulta;
