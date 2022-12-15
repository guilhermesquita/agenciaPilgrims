import React from "react";
import { Main } from "./components/Main/Main";
import { Results } from "./components/Results/Results";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Main/>
      <Results/>
    </div>
  )
}

export default App
