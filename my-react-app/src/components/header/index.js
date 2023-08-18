import styled from "styled-components"
import Logo from "../logo"
import Barra from "../barraDePesquisa"
import Icone from "../iconeUsuario"

const HeaderContainer = styled.header`
    width: 82rem;
    height: 3.5rem;
    padding-top: 2rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;

`

function Header () {

    return (

        <HeaderContainer>
            <Logo/>
            <Barra/>
            <Icone/>
        </HeaderContainer>


    )

}


export default Header