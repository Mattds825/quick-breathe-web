import React, { useState } from 'react';
import styled from 'styled-components';
import InstructionsModal from './InstructionsModal';
import SoundSelector from './SoundSelector';
import TimeSelector from './TimeSelector'

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

function Controls({themeToggler, startMeditation}){

  // Handle the instruction modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle the sound selection
  const [selectedSound, setSelectedSound] = useState('No Sounds');

  // Handle Time
  const [time, setTime] = useState(0);

    return(
        <ControlsContainer>
            <Button onClick={themeToggler}>Toggle Theme</Button>
            <Button onClick={openModal} >Instructions</Button>
            <SoundSelector selectedSound={selectedSound} setSelectedSound={setSelectedSound} />
            <TimeSelector time={time} setTime={setTime} />
            <Button onClick={() => startMeditation(selectedSound, time)}>Start</Button>
            <p>Selected Sound: {selectedSound} time limit: {time}</p>
            <InstructionsModal isOpen={isModalOpen} onClose={closeModal} />
        </ControlsContainer>
    )
}

export default Controls;