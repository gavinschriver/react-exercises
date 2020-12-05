import React from "react";

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
    handleTimerChange
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
