import React, { useState, useEffect } from "react";
import "./secondTimer.css";

const SecondTestTimer = (props) => {
  const { timerValues, setTimerValues } = props;

  function toggle() {
    setTimerValues((timerValues) => ({
      ...timerValues,
      isActive: !timerValues.isActive,
    }));
  }

  function reset() {
    setTimerValues((timerValues) => ({
      ...timerValues,
      seconds: timerValues.timerVal,
      isActive: false,
    }));
  }

  useEffect(() => {
    let interval = null;
    //if timer is On...
    if (timerValues.isActive) {
      if (timerValues.seconds > 0) {
        interval = setInterval(() => {
          setTimerValues((timerValues) => ({
            ...timerValues,
            seconds: timerValues.seconds - 1,
            timeTotal: timerValues.timeTotal + 1,
          }));
        }, 1000);
      } else toggle();
      // otherwise, if timer is off AND 'seconds' isn't 0...
    } else if (!timerValues.isActive && timerValues.seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerValues.isActive, timerValues.seconds]);

  // every time isActive changes, see if seconds is 0, and if so alert "times up"
  useEffect(() => {
    if (timerValues.seconds == 0) {
      alert("times up");
      setTimerValues((timerValues) => ({
        ...timerValues,
        seconds: timerValues.timerVal,
      }));
    }
  }, [timerValues.isActive]);

  // update the countdown to be the same as timerVal when timerVal is selected
  useEffect(() => {
      setTimerValues(timerValues => ({
          ...timerValues,
          seconds: timerValues.timerVal
    }))
  }, [timerValues.timerVal]);

  return (
    <div>
      <div className="time">{timerValues.seconds}s</div>
      <div>Total time: {timerValues.timeTotal}</div>
      <div>Timer value:{timerValues.timerVal}</div>
      <div className="row">
        <button
          disabled={timerValues.timerVal === 0 ? true : false}
          className={`button button-primary button-primary-${
            timerValues.isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {timerValues.isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <select
          value={timerValues.timerVal}
          onChange={(e) => {
            setTimerValues((timerValues) => ({
              ...timerValues,
              timerVal: e.target.value,
            }));
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

export default SecondTestTimer;

{
  /* <input value={timerVal} onChange={(e) => setTimerVal(e.target.value)} /> */
}
