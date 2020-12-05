import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [timerValue, setTimerValue] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [startButton, setStartButton] = useState(true);
  const [pauseButton, setPauseButton] = useState(false);
  const [stopButton, setStopButton] = useState(false);

  const [stopCount, setStopCount] = useState(0);

  const toggleTimer = () => {
    setTimerOn(!timerOn);
  };

  const handleTimerChange = (value) => {
    setStartButton(true)
    setTimerValue(value);
    setCountdown(value);
    setStopCount(0)
  };

  const handleStartButtonPress = (e) => {
    e.preventDefault()
    toggleTimer();
    setStartButton(false);
    setPauseButton(true);
    setStopButton(true);
    setStopCount(0);
  };

  const handlePauseButtonPress = (e) => {
    e.preventDefault()
    toggleTimer();
    setPauseButton(!pauseButton);
    setStartButton(!startButton);
  };

  const handleStopButtonPress = (e) => {
    e.preventDefault()
    if (stopCount == 1) {
      setCountdown(timerValue);
      setStopButton(false);
      setPauseButton(false)
      setStartButton(true)
      setStopCount(0);
    } else {
      if (timerOn) {
        toggleTimer();
        setStartButton(true)
        setPauseButton(false)
      }
      setStopCount(1);
    }
  };


  const addTime = () => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
        setTotalTime(totalTime + 1);
      }, 1000); 
    } else {
      setTimerOn(false);
      setStopButton(false);
      setPauseButton(false)
      setStartButton(true)
    };
  };

  if (timerOn) {
    addTime();
  }

  useEffect(() => {
    if (countdown === 0 ) {
      handleTimerChange(timerValue)
    }
  }, [countdown])

  useEffect(() => {
    console.log(timerValue)
    if (parseInt(timerValue) === 0) {
      setStartButton(false)
      setStopButton(false)
    }
  }, [timerValue])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <select
            onChange={(e) => handleTimerChange(e.target.value)}
            value={timerValue}
          >
            <option value={0}>Choose a time</option>
            {[60, 120, 180, 240, 300].map((time) => {
              return <option value={time}>{`${time / 60} minutes`}</option>;
            })}
            <option value={5}>gimme 5</option>
          </select>
          <button onClick={handleStartButtonPress} disabled={!startButton}>
            {((stopButton || pauseButton) && startButton) ? `RESUME` : `START`}
          </button>
          <button onClick={handlePauseButtonPress} disabled={!pauseButton}>
            PAUSE
          </button>
          <button onClick={handleStopButtonPress} disabled={!stopButton}>
            {stopCount === 0 ? `STOP` : `RESET`}
          </button>
          <div>Time remaining: {countdown}</div>
          <div>Total time: {totalTime}</div>
          <div>Timer value: {timerValue}</div>
          <div>{timerOn ? `Timer is On` : `Timer is OFF`}</div>
          <div>Stop Count:{stopCount}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
