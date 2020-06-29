import React from "react";

const Resultado = ({ persona }) => {
  return (
    <div className="w-full flex-col lg:flex-row flex items-center justify-center mt-4">
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Cédula
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {"V-" + persona.cedula}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Nombre
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {persona.nombre}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Municipio
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {persona.municipio}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Parroquia
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {persona.parroquia}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          CLAP
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {persona.clap}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Ult. Fecha Atención
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center">
          {persona.fecha}
        </p>
      </div>
    </div>
  );
};

export default Resultado;
