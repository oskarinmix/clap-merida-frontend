// import React from "react";
// import ReactDOM from "react-dom";

// const portalRoot = document.getElementById("portal");

// const Portal = ({ children }) => {
//   const el = document.createElement("div");
//   React.useEffect = () => {
//     portalRoot.appendChild(el);
//     return portalRoot.removeChild(el);
//   };

//   return ReactDOM.createPortal(children, el);
// };
// export default Portal;

import { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
