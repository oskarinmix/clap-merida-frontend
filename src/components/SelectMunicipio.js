import React from "react";
import { DataContext } from "../context/useData";

const SelectMunicipio = () => {
  const { setMunicipio, setParroquia, datos } = React.useContext(DataContext);
  return (
    <React.Fragment>
      <label
        htmlFor="municipio"
        className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md"
      >
        Municipio
      </label>
      <select
        id="municipio"
        className="w-full p-4"
        onChange={(e) => {
          setMunicipio(e.target.value);
          setParroquia("Seleccione una Parroquia");
        }}
      >
        <option>Seleccione un Municipio</option>
        {datos.municipios &&
          datos.municipios.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.municipio}
              </option>
            );
          })}
      </select>
    </React.Fragment>
  );
};

export default SelectMunicipio;
