import React from "react";

const Resultado = ({ persona }) => {
  const genDate = () => {
    const day = Math.ceil(Math.random() * 30);
    const month = Math.ceil(Math.random() * 4);
    const year = "2020";
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Cédula
      </h2>
      <p className="p-2">{"V-" + persona.cedula}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Nombre
      </h2>
      <p className="p-2">{persona.nombre}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Municipio
      </h2>
      <p className="p-2">{persona.municipio}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Parroquia
      </h2>
      <p className="p-2">{persona.parroquia}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Clap
      </h2>
      <p className="p-2">{persona.clap}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Comunidad
      </h2>
      <p className="p-2">{persona.comunidad}</p>
      <h2 className="bg-red-700 w-1/3 p-2 flex justify-center items-center">
        Ultima Fécha de Atención
      </h2>
      <p className="p-2">{genDate()}</p>
    </div>
  );
};

export default Resultado;
