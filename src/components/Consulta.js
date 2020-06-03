import React, { useState } from "react";
import axios from "axios";
import "./consulta.css";
import Resultado from "./Resultado";
const Consulta = () => {
  const [cedula, setCedula] = useState("");
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [persona, setPersona] = useState([]);

  React.useEffect(() => {
    const validateCedula = () => {
      const validacion = new RegExp(/^\d{1,8}$/);
      if (!validacion.test(cedula)) {
        setCedula(cedula.slice(0, -1));
      }
    };
    validateCedula();
  }, [cedula]);
  const genDate = () => {
    const day = Math.ceil(Math.random() * 30);
    const month = Math.ceil(Math.random() * 4);
    const year = "2020";
    return `${day}/${month}/${year}`;
  };

  const consultar = async () => {
    const componente = document.querySelector(".cedula > input");
    componente.focus();
    if (cedula.length === 0) {
    } else {
      const resp = await axios.get(
        `https://clapmerida-be.herokuapp.com/busqueda/coleccion/personas/${cedula}`
      );
      setPersona(resp.data.personas[0]);

      if (resp.data.personas[0]) {
        setMostrar(true);
      } else {
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
        <span className="cedula">
          <input
            id="cedula"
            className="w-full p-4 pl-10"
            onChange={(e) => {
              setCedula(e.target.value);
              setError(false);
              setMostrar(false);
            }}
            value={cedula}
            autoComplete={"off"}
          />
        </span>
        <span
          className={
            !cedula.length > 0
              ? "bg-gray-800 p-4 m-4  rounded-lg text-center text-white cursor-pointer"
              : "bg-red-700 p-4 m-4  rounded-lg text-center text-white cursor-pointer"
          }
          onClick={consultar}
        >
          Consultar
        </span>
      </div>
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

// {
//   /* <table className=" w-full mt-5 shadow-lg">
//           <thead>
//             <tr className="rounded-lg">
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Cédula
//               </th>
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Nombre
//               </th>
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Municipio
//               </th>
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Parroquia
//               </th>
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Nombre del CLAP
//               </th>
//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Comunidad
//               </th>

//               <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
//                 Ult.Fecha Atención
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className={"bg-red-100"}>
//               <td className="border px-8 py-4">{"V-" + persona.cedula}</td>
//               <td className="border px-8 py-4">{persona.nombre}</td>
//               <td className="border px-8 py-4">{persona.municipio}</td>
//               <td className="border px-8 py-4">{persona.parroquia}</td>
//               <td className="border px-8 py-4">{persona.clap}</td>
//               <td className="border px-8 py-4">{persona.comunidad}</td>

//               <td className="border px-8 py-4">{genDate()}</td>
//             </tr>
//           </tbody>
//       </table>*/
// }
