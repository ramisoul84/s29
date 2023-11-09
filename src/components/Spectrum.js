import { useState, useEffect, useRef } from "react";
import "./spectrum.scss";
const Spectrum = () => {
  const [value, setValue] = useState(0);
  const changeHandle = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const mouseOutHandle = () => {
    const range = document.getElementById("range");
    if (value >= 0 && value < 10) {
      range.value = 0;
    } else if (value >= 10 && value < 20) {
      range.value = 15;
    } else if (value >= 20 && value < 30) {
      range.value = 25;
    } else if (value >= 30 && value < 40) {
      range.value = 35;
    } else if (value >= 40 && value <= 50) {
      range.value = 50;
    }
  };

  return (
    <div className="spectrum">
      <p>OUR EXPERIENCE SPECTRUM</p>
      <div className="spectrum-container">
        <input
          type="range"
          id="range"
          className="spectrum-thumb"
          min={0}
          max={50}
          value={value}
          onChange={changeHandle}
          onMouseUp={mouseOutHandle}
        />
        <div className="spectrum-types">
          <p style={{ textAlign: "left" }}>game designe</p>
          <p>web designe</p>
          <p>brand designe</p>
          <p>arch-viz</p>
          <p style={{ textAlign: "right" }}>architecture</p>
        </div>
        <div className="spectrum-track"></div>
        <div className="spectrum-sqs">
          <div className="sq"></div>
          <div className="sq"></div>
          <div className="sq"></div>
          <div className="sq"></div>
          <div className="sq"></div>
        </div>
        <p className="spectrum-value">{value}</p>
      </div>
    </div>
  );
};
export default Spectrum;
