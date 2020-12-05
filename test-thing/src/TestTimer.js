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
    if (isActive) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
          setTimeTotal((timeTotal) => timeTotal + 1);
        }, 1000);
      } else toggle();
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      alert("times up");
      setSeconds(timerVal);
    }
  }, [isActive]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div>Total time: {timeTotal}</div>
      <div className="row">
        <button
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
        <input value={timerVal} onChange={(e) => setTimerVal(e.target.value)} />
      </div>
    </div>
  );
};

export default TestTimer;
