import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.headerText};
  transition: all 0.3s ease;
`;

function Header() {
    return (
        <HeaderContainer>
            <h1>Breathing Meditation App</h1>
        </HeaderContainer>
    )
}

export default Header;