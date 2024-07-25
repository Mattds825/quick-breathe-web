import React from "react";
import './BubbleRangeSlider.scss'

function BubbleRangeSlider() {
  return (
    <div class="Container">
      <div class="">
        <div class="BubbleRange">
          <input
            id="BubbleRangeLarge"
            name="BubbleRangeLarge"
            type="Range"
            min="0"
            max="100"
            step="1"
            value="50"
          />
          <label for="BubbleRangeLarge">BubbleRange</label>
        </div>
      </div>
    </div>
  );
}

export default BubbleRangeSlider;
