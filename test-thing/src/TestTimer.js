import React, { useState, useEffect } from "react";
import "./secondTimer.css";

const TestTimer = (props) => {  
  const {
    seconds,
    setSeconds,
    isActive,
    setIsActive,
    timeTotal,
    setTimeTotal,
    timerVal,
    setTimerVal,
  } = props;

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(timerVal);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    //if timer is On...
    if (isActive) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
          setTimeTotal((timeTotal) => timeTotal + 1);
        }, 1000);
      } else toggle();
      // otherwise, if timer is off AND 'seconds' isn't 0...
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // every time isActive changes, see if seconds is 0, and if so alert "times up"
  useEffect(() => {
    if (seconds === 0) {
      alert("times up");
      setSeconds(timerVal);
    }
  }, [isActive]);

  // update the countdown to be the same as timerVal when timerVal is selected
  useEffect(() => {
    setSeconds(timerVal);
  }, [timerVal]);

  return (
    <div>
      <div className="time">{seconds}s</div>
      <div>Total time: {timeTotal}</div>
      <div>Timer value:{timerVal}</div>
      <div className="row">
        <button
          disabled={timerVal === 0 ? true : false}
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <select
          value={timerVal}
          onChange={(e) => {
            setTimerVal(e.target.value);
            reset();
          }}
        >
          <option value={0}>Set timer duration</option>
          <option value={10}>10 seconds</option>
          <option value={20}>20 seconds</option>
          <option value={30}>30 seconds</option>
        </select>
      </div>
    </div>
  );
};

export default TestTimer;

{
  /* <input value={timerVal} onChange={(e) => setTimerVal(e.target.value)} /> */
}
