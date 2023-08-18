import React from "react";
import styled from "styled-components"
import Header from "./components/header" 
import { BrowserRouter} from "react-router-dom"
import Menu from "./components/menu"

const AppContainer = styled.div `
  background-color: #051D3B;
  width: 85.4rem;
  height: 64rem;
`

function App() {
  return (
      <BrowserRouter>
        <AppContainer>
          <Header/>
          <Menu/>
        </AppContainer>
      </BrowserRouter>
  );
}

export default App;
