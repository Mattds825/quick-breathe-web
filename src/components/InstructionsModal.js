
import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

function InstructionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Instructions</h2>
        <p>1. Use the "Toggle Theme" button to switch between dark and light modes.</p>
        <p>2. Select a sound or choose "No Sounds" for meditation.</p>
        <p>3. Use the slider to set the duration of your meditation session.</p>
        <p>4. Click "Start" to begin the meditation.</p>
        <p>5. Follow the breathing instructions and watch the breathe circle.</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default InstructionsModal;