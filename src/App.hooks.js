import React, { useReducer } from "react";
import AppContext from "./AppContext";
import Box from "./Box";

function reducer(state, action) {
  if (action === "toggle") {
    return !state;
  }
  throw new Error();
}

function App() {
  const [isYellow, dispatch] = useReducer(reducer, true);

  // This is actually useless
  const value = React.useMemo(
    () => ({
      isYellow,
      dispatch
    }),
    [isYellow, dispatch]
  );

  return (
    <AppContext.Provider value={value}>
      <h1>App.hooks.js</h1>
      <Box depth={12} />
    </AppContext.Provider>
  );
}

export default App;
