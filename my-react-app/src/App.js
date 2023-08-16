import styled from "styled-components"
import Header from "./components/header"


const AppContainer = styled.div `
  background-color: #051D3B;
  width: 90rem;
  height: 64rem;
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
