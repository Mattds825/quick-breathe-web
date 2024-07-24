import React from "react";
import styled from "styled-components";

const ControlsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 5px;
`;

function Controls({themeToggler}){
    return(
        <ControlsContainer>
            <Button onClick={themeToggler}>Toggle Theme</Button>
            <Button>Instructions</Button>
        </ControlsContainer>
    )
}

export default Controls;