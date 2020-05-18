import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consulta from "./components/Consulta";
import Footer from "./components/Footer";
import { useData, DataContext } from "./context/useData";
import { useSpring, animated } from "react-spring";

function App() {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });
  return (
    <Router>
      <Header />
      <animated.div
        className="bg-gray-400 w-full "
        style={{ minHeight: "calc(100vh - 264px )", fade }}
      >
        <div className="select-none flex w-full justify-center items-center ">
          <h1 className="select-none bg-red-700 m-4 p-4 text-3xl mx-auto text-white text-center rounded-lg">
            Sistema de Consulta CLAP - Mérida
          </h1>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <DataContext.Provider value={useData()}>
                <Form />
              </DataContext.Provider>
            }
          />
          <Route path="/consulta" element={<Consulta />} />
        </Routes>
      </animated.div>
      <Footer />
    </Router>
  );
}
export default App;
