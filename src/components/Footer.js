import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.headerText};
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Quick Breathe</p>
    </FooterContainer>
  );
}

export default Footer;