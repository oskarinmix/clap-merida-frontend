import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router-dom";
import app from "../auth/auth.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="dflex mx-auto max-w-3xl">
      <h1 className="text-3xl">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="flex flex-col w-full">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="py-2 my-2 px-8"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="py-2 my-2 px-8"
        />
        <button type="submit" className="bg-red-600 text-xl p-2">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
