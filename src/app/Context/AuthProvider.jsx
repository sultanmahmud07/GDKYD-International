"use client"
import React, { createContext} from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {



  // Auth provider all information share>>>>>>
  const authInfo = {
 
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
