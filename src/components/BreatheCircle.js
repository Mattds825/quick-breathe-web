import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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

function BreatheCircle({ time, sound }) {
  const [breatheState, setBreatheState] = useState("in");
  const [remainingTime, setRemainingTime] = useState(time * 60); // Convert minutes to seconds

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
      };
    } else {
      return () => clearInterval(interval);
    }
  }, [time]);

  useEffect(() => {
    if (remainingTime === 0) {
      // handle end of meditation
      setBreatheState("done");
    }
  }, [remainingTime]);

  return (
    <div>
      {breatheState !== "done" ? (
        <>
          <BreatheText>
            {breatheState === "in" ? "Breathe In" : "Breathe Out"}
          </BreatheText>
          <Circle breatheState={breatheState} />
        </>
      ) : (
        <BreatheText>Your Meditation is done</BreatheText>
      )}
    </div>
  );
}

export default BreatheCircle;
