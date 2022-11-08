import React from "react";
//import Aside from "./components/Main/Aside/Aside";
import HeaderWhite from './components/Main/HeaderWhite/HeaderWhite';
import { GlobalStyle } from "./globalStyle";
import {Main} from './style'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Main>
        <HeaderWhite/>
      </Main>
    </div>
  )
}

export default App
