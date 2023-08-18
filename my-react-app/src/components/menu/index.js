import React from 'react';
import styled from 'styled-components';
import Botao from '../button';

const StyledMenu = styled.div`
  position: relative;
  padding-top: 40px;
  padding-left: 9px;
`;

const PMenu = styled.p`
  color: var(--neutral-white, #FFF);
  padding-left: 20px;

`;


class Menu extends React.Component {
  render() {
    return (
      <StyledMenu>
        <PMenu>Menu</PMenu>
        <Botao texto="Editor de texto" />
        <Botao texto="Comunidade"/> 
      </StyledMenu>
    );
  }
}

export default Menu;
