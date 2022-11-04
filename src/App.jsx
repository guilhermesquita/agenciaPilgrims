import React from "react";
import Aside from "./components/Main/Aside/Aside";
import Header from './components/Main/Header/Header';
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Aside/>
    </div>
  )
}

export default App
