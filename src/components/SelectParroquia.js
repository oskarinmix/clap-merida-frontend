import React from "react";
import { DataContext } from "../context/useData";
const SelectParroquia = () => {
  const { parroquia, municipio, setParroquia, datos } = React.useContext(
    DataContext
  );
  return (
    <React.Fragment>
      <label
        htmlFor="parroquia"
        className="px-4 py-2 text-white text-2xl my-2 bg-gray-800 rounded-md"
      >
        Parroquia
      </label>
      <select
        id="parroquia"
        className="w-full p-4"
        onChange={(e) => {
          setParroquia(e.target.value);
        }}
        value={parroquia}
      >
        <option>Seleccione una Parroquia</option>
        {datos.municipios[municipio].parroquias &&
          datos.municipios[municipio].parroquias.map((item, index) => {
            return <option key={index}> {item} </option>;
          })}
      </select>
    </React.Fragment>
  );
};

export default SelectParroquia;
