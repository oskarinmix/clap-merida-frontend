import React from "react";
import axios from "axios";
import datos from "../data/municipios.json";
export const useData = () => {
  const [municipio, setMunicipio] = React.useState(null);
  const [parroquia, setParroquia] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [filtered, setFiltered] = React.useState([]);
  const [clap, setClap] = React.useState([]);

  const filterData = (municipio, parroquia) => {
    municipio = datos.municipios[municipio].municipio;
    let dataFiltered = [];
    if (data) {
      parroquia === "Seleccione una Parroquia"
        ? (dataFiltered = data.filter((clap) => clap.municipio === municipio))
        : (dataFiltered = data.filter(
            (clap) =>
              clap.municipio === municipio && clap.parroquia === parroquia
          ));
    }
    setFiltered(dataFiltered);
  };
  const autoReloadTable = (municipio, parroquia) => {
    if (municipio !== "Seleccione un Municipio") {
      filterData(municipio, parroquia ? parroquia : null);
    } else {
      setMunicipio(null);
      setParroquia(null);
    }
  };
  const fetchData = async () => {
    const resp = await axios.get(
      // `https://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/clap`
      `http://67.205.180.49/clap`
    );
    setData(resp.data.claps);
  };
  const fetchClap = async (id) => {
    const resp = await axios.get(
      // `https://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/clap/${id}`
      `https://67.205.180.49/clap/${id}`
    );
    setClap(resp.data.clap);
  };

  return {
    municipio,
    setMunicipio,
    parroquia,
    setParroquia,
    data,
    setData,
    filtered,
    setFiltered,
    fetchData,
    filterData,
    autoReloadTable,
    datos,
    setClap,
    clap,
    fetchClap,
  };
};

export const DataContext = React.createContext();
