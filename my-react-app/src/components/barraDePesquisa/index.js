import barra from "../../img/barraDePesquisa.png"
import styled from "styled-components"



const BarraContainer = styled.div `
    width: 47rem; 
    display: flex;
    justify-self: center;
`


const BarraImage = styled.img`
    margin-right: 10px;
    width: 37.5rem;
`

function Barra() {
    return (
        <BarraContainer>
            <BarraImage
                src={barra}
                alt='logo'
            />

        </BarraContainer>

    )
}


export default Barra