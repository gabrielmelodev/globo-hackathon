import React from "react";


export const AuthContext  = React.createContext();


export const AuthProvider = ({children}) => {
  const  logged  = localStorage.getItem("logged");

  if(logged === null) {
    localStorage.setItem("logged", JSON.stringify({ logged: false}));
  }

  return (
  <AuthContext.Provider  value={{
      logged
    }}>
     {children}
    </AuthContext.Provider>
  );
};