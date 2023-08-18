import icone from "../../img/iconePessoa.png"
import styled from "styled-components"


const IconeContainer = styled.div`
    justify-self: end;
`

const IconeImage = styled.img`
    margin-right: 10px;
    width: 9rem;
    height: 5rem; 
`

function Icone() {
    return(

        <IconeContainer>
            <IconeImage
            src={icone}
            alt='icone'            
            />
        </IconeContainer>




    )
    


}


export default Icone