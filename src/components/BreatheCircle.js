import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import showEndMeditationDialog from './EndMeditationDialog';

const expand = keyframes`
from{
    transform: scale(1);
}
to{
    transform: scale(2);
}
`;

const contract = keyframes`
from{
    transform: scale(2);
}
to{
    transform: scale(1);
}
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  animation: ${({ breatheState }) =>
      breatheState === "in" ? expand : contract}
    4s infinite;
`;

const BreatheText = styled.div`
  position: absolute;
  top: 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  margin-top: 20px;
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

function BreatheCircle({ time, sound, endMeditation }) {
  const [breatheState, setBreatheState] = useState("in");
  const [remainingTime, setRemainingTime] = useState(time * 60); // Convert minutes to seconds
  const [audio] = useState(new Audio(`/sounds/${sound.toLowerCase()}.mp3`));

  //   Breathe in out effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBreatheState((prevState) => (prevState === "in" ? "out" : "in"));
    }, 4000); //Switch States Every 4 seconds

    if (time > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); //Decrement remaining time revery second

      return () => {
        clearInterval(interval);
        clearInterval(timer);
       if (audio){
        audio.pause();
        audio.currentTime = 0;
       }
      };
    } else {
      return () => {
        clearInterval(interval);
        if(audio){
            audio.currentTime = 0;
        audio.pause();
        }
      }
    }
  }, [time, audio]);

  useEffect(() => {
    if (remainingTime === 0) {
      // handle end of meditation
      setBreatheState("done");
      if(audio){
        audio.pause();
      audio.currentTime = 0;
      }
    }
  }, [remainingTime, audio]);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  //   handle user ends mediation
  const handleEndMeditation = () => {
    showEndMeditationDialog(() => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      endMeditation();
    });
  };

  return (
    <div onClick={handleEndMeditation} style={{ position: 'relative' }}>
      {breatheState !== "done" ? (
        <>
          <BreatheText>
            {breatheState === "in" ? "Breathe In" : "Breathe Out"}
          </BreatheText>
          <div
            className="box"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.5)',
              transform: breatheState === 'in' ? 'scale(2)' : 'scale(1)',
              transition: 'transform 4s ease-in-out'
            }}
          />
        </>
      ) : (
        <>
        <BreatheText>Your Meditation is done</BreatheText>
        <Button onClick={endMeditation}>Done</Button>
      </>
      )}
    </div>
  );
}

export default BreatheCircle;
