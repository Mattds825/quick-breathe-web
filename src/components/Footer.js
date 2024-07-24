import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Breathing Meditation App</p>
    </FooterContainer>
  );
}

export default Footer;