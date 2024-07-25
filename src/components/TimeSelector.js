import React from "react";
import styled from "styled-components";
import './BubbleRangeSlider.scss'

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
     <div className="field ">
        <Label className="label">Time</Label>
        <div className="control BubbleRange">
          <input
            className="slider is-fullwidth is-primary"
            type="range"
            min="0"
            max="60"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <p className="help">{time} minutes</p>
        </div>
      </div>
    </TimeSelectorContainer>
  );
}

export default TimeSelector;
