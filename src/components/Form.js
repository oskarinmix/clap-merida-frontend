import React, { useEffect } from "react";
import "./form.css";
import Table from "./Table";
import SelectForm from "./SelectForm";
import { DataContext } from "../context/useData";
const Form = () => {
  const {
    municipio,
    setMunicipio,
    setParroquia,
    parroquia,
    filtered,
    fetchData,
    autoReloadTable,
  } = React.useContext(DataContext);

  useEffect(() => {
    fetchData();
    setMunicipio(null);
    setParroquia(null);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    municipio && parroquia && autoReloadTable(municipio, parroquia);
    // eslint-disable-next-line
  }, [municipio, parroquia]);

  return (
    <div className="p-10 container mx-auto flex justify-center flex-col bg-gray-300">
      <SelectForm />

      {!!municipio &&
        municipio !== "Seleccione un Municipio" &&
        filtered.length > 0 && <Table filtered={filtered} />}
    </div>
  );
};
export default Form;
