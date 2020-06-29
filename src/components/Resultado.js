import React from "react";

const Resultado = ({ persona }) => {
  return (
    <div
      className="w-full flex-col lg:flex-row flex justify-center mt-4"
      style={{ minHeight: "100px" }}
    >
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Cédula
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {"V-" + persona.cedula}
        </p>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Nombre
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {persona.nombre}
        </p>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Municipio
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {persona.municipio}
        </p>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Parroquia
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {persona.parroquia}
        </p>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          CLAP
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {persona.clap}
        </p>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <h2 className="bg-red-700 w-full lg:w-auto p-2 flex justify-center items-center">
          Ult. Fecha Atención
        </h2>
        <p className="bg-white p-2 w-full flex justify-center items-center h-16">
          {persona.fecha}
        </p>
      </div>
    </div>
  );
};

export default Resultado;
