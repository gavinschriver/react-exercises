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
      remaining: timerValues.timerVal,
      isActive: false,
    }));
  }

  useEffect(() => {
    let interval = null;
    //if timer is On...
    if (timerValues.isActive) {
      // and if remaining is more than 0...
      if (timerValues.remaining > 0) {
        interval = setInterval(() => {
          setTimerValues((timerValues) => ({
            ...timerValues,
            remaining: timerValues.remaining - 1,
            timeTotal: timerValues.timeTotal + 1,
          }));
        }, 1000);
        //otherwise, if timer is still on but remaining is 0, turn isActive to False
      } else toggle();
      // otherwise, if timer is off AND 'remaining' isn't 0...
    } else if (!timerValues.isActive && timerValues.remaining !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerValues.isActive, timerValues.remaining]);

  // every time isActive changes, see if remaining is 0 and timetotal is more than 0 (timeTotal is for
  //current life of the component, so checking this ensures we dont get an alert when we first load the page), and if so alert "times up"
  useEffect(() => {
    if (timerValues.remaining == 0 && timerValues.timeTotal > 0) {
      setTimerValues((timerValues) => ({
        ...timerValues,
        remaining: timerValues.timerVal,
      }));
      alert("times up");
    }
  }, [timerValues.isActive]);

  // update the countdown to be the same as timerVal when timerVal is selected
  useEffect(() => {
    setTimerValues((timerValues) => ({
      ...timerValues,
      remaining: timerValues.timerVal,
    }));
  }, [timerValues.timerVal]);

  return (
    <div>
      <div className="time">{timerValues.remaining}s</div>
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
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        {props.children}
      </div>
    </div>
  );
};

export default SecondTestTimer;
