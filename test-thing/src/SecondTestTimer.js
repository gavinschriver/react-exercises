import React, { useEffect } from "react";
// import "./secondTimer.css";

const SecondTestTimer = (props) => {
  const { timer, setTimer } = props;

  //switch Timer on or Off
  const toggle = () => {
    setTimer((timer) => ({
      ...timer,
      isActive: !timer.isActive
    }));
  };

  // when reset is pressed, make sure we turn off timer, but also
  // reset us to whatever timer Value was previously selected
  const reset = () => {
    setTimer((timer) => ({
      ...timer,
      remaining: timer.timerVal,
      isActive: false
    }));
  };

  useEffect(() => {
    let interval = null;
    //if timer is On...
    if (timer.isActive) {
      // and if remaining is more than 0...
      if (timer.remaining > 0) {
        //set an interval that subtracts 1 from remaining and adds one to timeTotal
        //every second
        interval = setInterval(() => {
          setTimer((timer) => ({
            ...timer,
            remaining: timer.remaining - 1,
            timeTotal: timer.timeTotal + 1
          }));
        }, 1000);
        //otherwise, if timer is still on but remaining is 0, turn timer off
      } else toggle();
      // otherwise, if timer is off AND 'remaining' isn't 0...i dont understand this line LOL
    } else if (!timer.isActive && timer.remaining !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  //when isActive changes, if the clock hits 0, reset it to the currently selected val
  // then wait a tiny bit and throw an alert
  useEffect(() => {
    if (timer.remaining === 0 && timer.timeTotal > 0) {
      setTimer((timer) => ({
        ...timer,
        remaining: timer.timerVal
      }));
      setTimeout(() => {
        alert("Times up");
      }, 500);
    }
  }, [timer.isActive]);

  const handleTimerChange = (e) => {
    setTimer((timer) => ({
      ...timer,
      remaining: e.target.value,
      timerVal: e.target.value
    }));
  };

  return (
    <div>
      <div className="time">Currently remaining: {timer.remaining}s</div>
      <div>Total time counted: {timer.timeTotal}s</div>
      <div>Timer value:{timer.timerVal}s</div>
      <div className="row">
        <button
          disabled={timer.timerVal == 0 ? true : false}
          className={`button button-primary button-primary-${
            timer.isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {timer.isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <select value={timer.timerVal} onChange={handleTimerChange}>
          <option value={0}>Set timer duration</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  );
};

export default SecondTestTimer;
