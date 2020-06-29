import React from "react";
import edit from "../img/edit.svg";
import Modal from "../components/Modal";
import FormEdit from "./FormEdit";
const genDate = () => {
  const day = Math.ceil(Math.random() * 30);
  const month = Math.ceil(Math.random() * 4);
  const year = "2020";
  return `${day}/${month}/${year}`;
};

const Table = ({ filtered }) => {
  const [isToggled, setIsToggled] = React.useState(false);
  const [idModal, setIdModal] = React.useState(false);

  return (
    <table className=" w-full mt-5 shadow-lg">
      <Modal
        on={isToggled}
        toggle={() => setIsToggled(!isToggled)}
        className="w-full"
      >
        <FormEdit id={idModal} toggle={() => setIsToggled(!isToggled)} />
      </Modal>
      <thead>
        <tr className="rounded-lg">
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Código
          </th>
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Parroquia
          </th>
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Nombre del Clap
          </th>
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Combos Entregados
          </th>
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Ult.Fecha Atencion
          </th>
          <th className="bg-red-700 border text-left px-8 py-4 text-xl text-white">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((item, index) => {
          return (
            <tr key={index} className={index % 2 ? "bg-red-300" : "bg-red-100"}>
              <td className="border px-8 py-4">{item.codigo}</td>
              <td className="border px-8 py-4">{item.parroquia}</td>
              <td className="border px-8 py-4">{item.nombre}</td>
              <td className="border px-8 py-4">{item.total}</td>
              <td className="border px-8 py-4">{item.distribucion}</td>
              <td className="border px-8 py-4">
                <img
                  src={edit}
                  alt="edit"
                  className="h-10"
                  onClick={() => {
                    setIsToggled(true);
                    setIdModal(item._id);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
