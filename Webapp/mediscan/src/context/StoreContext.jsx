import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:8000";

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  const [result, setResult] = useState("");

  const contextValue = {
    url,
    token,
    user,
    setToken,
    setUser,
    setResult,
    result,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
