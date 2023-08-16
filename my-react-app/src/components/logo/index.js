import logo from "../../img/Logo.svg"
import styled from "styled-components"



const LogoContainer = styled.div`
    width: 9.0625rem;
    height: 2.12806rem;
    justify-self: start;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
       </LogoContainer>
    )
}

export default Logo