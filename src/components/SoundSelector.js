import React, {useState, useEffect} from "react";
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
  border: 1px solid ${({ theme }) => theme.buttonText};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h2`
color: ${({ theme }) => theme.buttonText};
font-size: xx-large;
font-weight: bolder;
`

function SoundSelector({ selectedSound, setSelectedSound, theme }) {
//   Theme based class changes
const [noSoundButtonClass, setNoSoundButtonClass] = useState('button is-light');
const [titleClass, setTitleClass] = useState('button is-light');
    useEffect(() => {
        // Update the button class based on the theme
        setNoSoundButtonClass(theme === 'light' ? 'button is-light' : 'button is-dark');
        setTitleClass(theme === 'light' ? 'title is-light' : 'title is-dark');
      }, [theme]); // Re-run effect when theme changes

        // Helper function to determine button class
      const getButtonClass = (sound) => {
        let soundButtonColor = 'is-info';
        switch(sound){
            case 'forest':
                soundButtonColor = 'is-primary';
                break;
            case 'synth':
                soundButtonColor = 'is-link';
                break;
            case 'beach':
                soundButtonColor = 'is-info';
                break;
            case 'none':
                soundButtonColor = '';
                break;
            default:
                soundButtonColor = ''
                break;
        }
        return selectedSound === sound ? `button is-filled ${soundButtonColor}` : `button is-outlined ${soundButtonColor}`;
      };

  return (
    <>
    <Title >Select your sound</Title>
    <div className="columns">
      <div className="column">
        <SoundButton
          className={getButtonClass('forest')}
          onClick={() => setSelectedSound("forest")}
        >
          Forest
        </SoundButton>
      </div>
      <div className="column">
        <SoundButton
          className={getButtonClass('synth')}
          onClick={() => setSelectedSound("synth")}
        >
          Synth
        </SoundButton>
      </div>
      <div className="column">
        <SoundButton
         className={getButtonClass('beach')}
          onClick={() => setSelectedSound("beach")}
        >
          Beach
        </SoundButton>
      </div>
      <div className="column">
        <SoundButton
        //    className={getButtonClass('none')}
          onClick={() => setSelectedSound("No Sounds")}
        >
          None
        </SoundButton>
      </div>
    </div>
    </>
  );
}

export default SoundSelector;
