import React from "react";

import { DataContext } from "../context/useData";
import SelectMunicipio from "./SelectMunicipio";
import SelectParroquia from "./SelectParroquia";
const SelectForm = () => {
  const { municipio, datos } = React.useContext(DataContext);

  const validarParroquia = () =>
    !!municipio &&
    municipio !== "Seleccione un Municipio" &&
    datos.municipios[municipio].parroquias.length > 1;

  return (
    <form className=" m-auto flex flex-col w-1/2">
      <SelectMunicipio />
      {validarParroquia() && <SelectParroquia />}
    </form>
  );
};

export default SelectForm;
