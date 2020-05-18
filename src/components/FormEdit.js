import React from "react";
import { DataContext } from "../context/useData";
const FormEdit = ({ id, toggle }) => {
  const { clap, fetchClap } = React.useContext(DataContext);
  React.useEffect(() => {
    fetchClap(id);
    // eslint-disable-next-line
  }, []);
  return (
    <form className="flex flex-col w-full p-8" style={{ width: "70vw" }}>
      <h3 className="px-4 py-2 text-white text-2xl my-2 bg-red-700 rounded-md px-4">
        Edición de Clap
      </h3>
      <div className="flex justify-between my-4">
        <label
          htmlFor="codigo"
          className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md px-4"
        >
          Codigo
        </label>
        <input
          id="codigo"
          value={clap.codigo}
          className="bg-gray-200 border-gray-900 rounded-lg  w-10/12 px-4"
        />
      </div>
      <div className="flex justify-between my-4">
        <label
          htmlFor="municipio"
          className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md px-4"
        >
          Municipio
        </label>
        <input
          id="municipio"
          value={clap.municipio}
          className="bg-gray-200 border-gray-900 rounded-md  w-10/12 px-4"
        />
      </div>
      <div className="flex justify-between my-4">
        <label
          htmlFor="parroquia"
          className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md px-4"
        >
          Parroquia
        </label>
        <input
          id="parroquia"
          value={clap.parroquia}
          className="bg-gray-200 border-gray-900 rounded-lg  w-10/12 px-4"
        />
      </div>
      <div className="flex justify-between my-4">
        <label
          htmlFor="nombre"
          className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md px-4"
        >
          Nombre
        </label>
        <input
          id="nombre"
          value={clap.nombre}
          className="bg-gray-200 border-gray-900 rounded-lg  w-10/12 px-4"
        />
      </div>
      <div className="flex justify-between my-4">
        <label
          htmlFor="comunidad"
          className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md px-4"
        >
          Comunidad
        </label>
        <input
          id="comunidad"
          value={clap.comunidad}
          className="bg-gray-200 border-gray-900 rounded-lg  w-10/12 px-4"
        />
      </div>
      <div className="flex justify-end ">
        <span
          className="p-4 bg-red-700 text-center text-white w-3/12 rounded-lg cursor-pointer"
          onClick={toggle}
        >
          Actualizar
        </span>
      </div>
    </form>
  );
};

export default FormEdit;
