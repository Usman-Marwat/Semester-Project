import React, { useState, useContext } from "react";
import { Text } from "react-native";

const IsLogContext = React.createContext();
const SetIsLogContext = React.createContext();

export function useLog() {
  return useContext(IsLogContext);
}
export function useSetIsLog() {
  return useContext(SetIsLogContext);
}

export function LogProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <IsLogContext.Provider value={isLogged}>
      <SetIsLogContext.Provider value={setIsLogged}>
        {props.children}
      </SetIsLogContext.Provider>
    </IsLogContext.Provider>
  );
}
