import React from "react";
import styled from "styled-components";

const TimeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Slider = styled.input`
  width: 80%;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
`;

function TimeSelector({ time, setTime }) {
  return (
    <TimeSelectorContainer>
      <Label>Time: {time === 0 ? "No Limit" : `${time} minutes`}</Label>
      <Slider
        type="range"
        min="0"
        max="60"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
    </TimeSelectorContainer>
  );
}

export default TimeSelector;
