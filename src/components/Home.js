import React from "react";
import clap from "../img/clap.png";
const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="select-none w-4/5 lg:w-1/3 h-auto mx-4 py-4"
        src={clap}
        alt="Clap Merida"
      />
    </div>
  );
};

export default Home;
