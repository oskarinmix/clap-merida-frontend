import React, { useEffect, useState } from "react";
import App from "../auth/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    App.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <AuthContext.Provider
        value={{
          currentUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};
