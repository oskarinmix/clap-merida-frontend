import React from "react";
import jehyson from "../img/jehyson.png";
import merida from "../img/merida.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
const Footer = () => {
  return (
    <footer
      className="select-none  w-full h-24 bg-red-700 flex items-center justify-between text-3xl text-white"
      style={{ bottom: 0 }}
    >
      <img className="select-none h-full mx-4" src={jehyson} alt="Jehyson" />
      <div className="select-none flex justify-center items-center">
        <img className="select-none h-10 px-4" src={twitter} alt="twitter" />
        <span className="select-none text-white text-3lg">@clap_merida</span>
        <img
          className="select-none h-10 px-4"
          src={instagram}
          alt="instagram"
        />
      </div>
      <img className="select-none h-full mx-4 py-4" src={merida} alt="Merida" />
    </footer>
  );
};

export default Footer;
