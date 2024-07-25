import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import showEndMeditationDialog from "./EndMeditationDialog";

const BreatheContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 20px 0;
`;

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
const BubbleCircle = styled.div`
  aspect-ratio: 1 / 1;
  width: "200px";
  height: "200px";
  border-radius: 50%;
  background: radial-gradient(circle at 70% 30%, #fff, rgba(0, 0, 0, 0) 25%),
    radial-gradient(
      circle at 60% 55%,
      rgba(0, 0, 0, 0) 60%,
      rgba(255, 0, 255, 0.8) 100%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 255, 255, 0.2) 60%,
      rgba(0, 0, 0, 0) 68%
    ),
    radial-gradient(
      circle at 50% 55%,
      rgba(0, 0, 0, 0) 35%,
      rgba(255, 255, 0, 0.2) 45%,
      rgba(0, 0, 0, 0) 55%
    );
`;

const BreatheText = styled.div`
   align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 50%;
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
  const [audio] = useState(new Audio(`./sounds/${sound.toLowerCase()}.mp3`));

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
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      };
    } else {
      return () => {
        clearInterval(interval);
        if (audio) {
          audio.currentTime = 0;
          audio.pause();
        }
      };
    }
  }, [time, audio]);

  useEffect(() => {
    if (remainingTime === 0) {
      // handle end of meditation
      setBreatheState("done");
      if (audio) {
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
    <BreatheContainer>
    <BreatheText>
              {breatheState === "in" ? "Breathe In" : "Breathe Out"}
            </BreatheText>
      <div onClick={handleEndMeditation}>
        {breatheState !== "done" ? (
          <>
            
            {/* <div
            className="box"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.5)',
              transform: breatheState === 'in' ? 'scale(2)' : 'scale(1)',
              transition: 'transform 4s ease-in-out'
            }}
          /> */}
            <BubbleCircle
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                transform: breatheState === "in" ? "scale(2)" : "scale(1)",
                transition: "transform 4s ease-in-out",
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
    </BreatheContainer>
  );
}

export default BreatheCircle;
