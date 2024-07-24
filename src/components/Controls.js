import React, { useState } from 'react';
import styled from 'styled-components';
import InstructionsModal from './InstructionsModal';

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
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

function Controls({themeToggler}){

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return(
        <ControlsContainer>
            <Button onClick={themeToggler}>Toggle Theme</Button>
            <Button onClick={openModal} >Instructions</Button>
            <InstructionsModal isOpen={isModalOpen} onClose={closeModal} />
        </ControlsContainer>
    )
}

export default Controls;