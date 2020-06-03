import React from "react";
import { useData, DataContext } from "../context/useData";
import Form from "./Form";
const Admin = () => {
  return (
    <React.Fragment>
      <DataContext.Provider value={useData()}>
        <Form />
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default Admin;
