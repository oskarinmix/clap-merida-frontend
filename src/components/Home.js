import React from "react";
import clap from "../img/clap.png";
// FRAMER
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ x: "-200vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        className="select-none w-4/5 lg:w-1/3 h-auto mx-4 py-4"
        src={clap}
        alt="Clap Merida"
      />
    </motion.div>
  );
};

export default Home;
