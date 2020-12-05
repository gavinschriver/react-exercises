import React, { useEffect } from "react";

export default (props) => {
  const {
    timerValue,
    timerOn,
    setTimerOn,
    setCountdown,
    startButton,
    setStartButton,
    pauseButton,
    setPauseButton,
    stopButton,
    setStopButton,
    stopCount,
    setStopCount,
    countdown,
    setTimerValue,
  } = props;

  const toggleTimer = () => {
    setTimerOn(!timerOn);
  };

  const handleStartButtonPress = (e) => {
    e.preventDefault();
    toggleTimer();
    setStartButton(false);
    setPauseButton(true);
    setStopButton(true);
    setStopCount(0);
  };

  const handlePauseButtonPress = (e) => {
    e.preventDefault();
    toggleTimer();
    setPauseButton(!pauseButton);
    setStartButton(!startButton);
  };

  const handleStopButtonPress = (e) => {
    e.preventDefault();
    if (stopCount == 1) {
      setCountdown(timerValue);
      setStopButton(false);
      setPauseButton(false);
      setStartButton(true);
      setStopCount(0);
    } else {
      if (timerOn) {
        toggleTimer();
        setStartButton(true);
        setPauseButton(false);
      }
      setStopCount(1);
    }
  };

  const handleTimerChange = (value) => {
    setStartButton(true);
    setTimerValue(value);
    setCountdown(value);
    setStopCount(0);
  };

//   reset the timer if countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
        handleTimerChange(timerValue);
    }
  }, [countdown]);

  // disable buttons if timerValue is 0, aka first <option's> value
  useEffect(() => {
    if (parseInt(timerValue) === 0) {
      setStartButton(false);
      setStopButton(false);
    }
  }, [timerValue]);

  return (
    <div>
      <select
        onChange={(e) => handleTimerChange(e.target.value)}
        value={timerValue}
      >
        <option value={0}>Choose a time</option>
        {[60, 120, 180, 240, 300].map((time) => {
          return <option value={time}>{`${time / 60} minutes`}</option>;
        })}
      </select>
      <button onClick={handleStartButtonPress} disabled={!startButton}>
        {(stopButton || pauseButton) && startButton ? `RESUME` : `START`}
      </button>
      <button onClick={handlePauseButtonPress} disabled={!pauseButton}>
        PAUSE
      </button>
      <button onClick={handleStopButtonPress} disabled={!stopButton}>
        {stopCount === 0 ? `STOP` : `RESET`}
      </button>
    </div>
  );
};
