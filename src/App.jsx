import React from "react";
import Aside from "./components/Main/Aside/Aside";
import HeaderWhite from './components/Main/HeaderWhite/HeaderWhite';
import { GlobalStyle } from "./globalStyle";
import {Main, Img} from './style'
import woman from './assets/woman.svg'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Main>
        <Img src={woman} height='90%'/>
        <HeaderWhite/>
        <aside>
          <Aside/>
        </aside>
      </Main>
    </div>
  )
}

export default App
