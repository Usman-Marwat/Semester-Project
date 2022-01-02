import "react-native-gesture-handler";
import React, { useState } from "react";

import { LogProvider } from "./context/LogContext";

import Main from "./Main";
import { GetId } from "./db/demo";

export default function App() {
  const [pass] = useState("Passed");
  return (
    <LogProvider>
      <Main pass={pass} />
    </LogProvider>
  );
}
