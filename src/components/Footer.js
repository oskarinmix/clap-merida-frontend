import React from "react";
import jehyson from "../img/jehyson.png";
import merida from "../img/merida.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      className="select-none  w-full h-24 bg-red-700 flex items-center justify-between text-3xl text-white"
      style={{ bottom: 0 }}
    >
      <motion.img
        className="select-none w-24 lg:h-full mx-4"
        src={jehyson}
        alt="Jehyson"
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ duration: 0.51 }}
      />
      <motion.div
        className="select-none flex justify-center items-center"
        animate={{ y: 0 }}
        initial={{ y: "200vh" }}
        transition={{ duration: 0.51 }}
      >
        <a
          href="https://www.twitter.com/clap_merida"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="select-none h-6 md:h-8 lg:h-10 px-4"
            src={twitter}
            alt="twitter"
          />
        </a>
        <motion.span className="select-none hidden lg:block text-white text-3lg">
          @clap_merida
        </motion.span>
        <a
          href="https://www.instagram.com/clap_merida"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="select-none h-6 md:h-8 lg:h-10 px-4"
            src={instagram}
            alt="instagram"
          />
        </a>
      </motion.div>
      <motion.img
        className="select-none w-24 lg:h-full mx-4 py-4"
        src={merida}
        alt="Merida"
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ duration: 0.51 }}
      />
    </motion.footer>
  );
};

export default Footer;
