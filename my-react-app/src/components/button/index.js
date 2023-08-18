import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`

  cursor: pointer;
  display: block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #051D3B;
  color: white;
  border: none;
  color: var(--neutral-white, #FFF);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
`;

class Botao extends React.Component {
  render() {
    return (
      <StyledButton>{this.props.texto}</StyledButton>
    );
  }
}

export default Botao;
