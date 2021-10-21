import React, { useContext, useState, createContext } from "react";
import Playlists from "../components/Playlists";
const GlobalStateContext = createContext({});

export default function GlobalStateProvider({ children }) {
  //declare variables
  const [usuario, setUsuario] = useState(null);

  return (
    <GlobalStateContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return context;
}
