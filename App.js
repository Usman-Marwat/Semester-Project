import "react-native-gesture-handler";
import React from "react";

import { LogProvider } from "./context/LogContext";
import Main from "./Main";

export default function App() {
  return (
    <LogProvider>
      <Main />
    </LogProvider>
  );
}
