import React from "react";
import styled from "styled-components";

const SoundSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const SoundButton = styled.div`
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

function SoundSelector({selectedSound, setSelectedSound}){
    return (
        <SoundSelectorContainer>
            <SoundButton onClick={() => setSelectedSound('Sound 1')}>Sound 1</SoundButton>
            <SoundButton onClick={() => setSelectedSound('Sound 2')}>Sound 2</SoundButton>
            <SoundButton onClick={() => setSelectedSound('Sound 3')}>Sound 3</SoundButton>
            <SoundButton onClick={() => setSelectedSound('No Sounds')}>No Sounds</SoundButton>
        </SoundSelectorContainer>
    )
}

export default SoundSelector;