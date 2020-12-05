import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import TestTimer from "./TestTimer";
import IconToggle from "./IconToggle";

function App() {
  const testData = [
    { id: 1, name: "apple" },
    { id: 2, name: "food" },
    { id: 3, name: "third" },
    { id: 4, name: "NOICE" },
    { id: 5, name: "farnsk" },
  ];

  const [selected, setSelected] = useState([])

  const handleSelect = (item) => {
    setSelected([...selected, item])
  };

  const handleDeselect = (id) => {
    console.log()
    const newArray = selected.filter(selectedItem => selectedItem.id !== id)
    setSelected(newArray)
  }

  // my shitty big fat timer
  const [timerValue, setTimerValue] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [startButton, setStartButton] = useState(true);
  const [pauseButton, setPauseButton] = useState(false);
  const [stopButton, setStopButton] = useState(false);

  const [stopCount, setStopCount] = useState(0);

  const addTime = () => {
    if (countdown > 0) {
      let timeout = setTimeout(() => {
        setCountdown(countdown - 1);
        setTotalTime(totalTime + 1);
      }, 1000);
    } else {
      setTimerOn(false);
      setStopButton(false);
      setPauseButton(false);
      setStartButton(true);
    }
  };

  if (timerOn) {
    addTime();
  }

  //copypasta ripoff attempts
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeTotal, setTimeTotal] = useState(0);
  const [timerVal, setTimerVal] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>Time remaining: {countdown}</div>
          <div>Total time: {totalTime}</div>
          <div>Timer value: {timerValue}</div>
          <div>{timerOn ? `Timer is On` : `Timer is OFF`}</div>
          <div>Stop Count:{stopCount}</div>
        </div>
      </header>
      {/* <Timer
        timerValue={timerValue}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
        setCountdown={setCountdown}
        startButton={startButton}
        setStartButton={setStartButton}
        pauseButton={pauseButton}
        setPauseButton={setPauseButton}
        stopButton={stopButton}
        setStopButton={setStopButton}
        setTimerValue={setTimerValue}
        totalTime={setTotalTime}
        setTotalTime={setTotalTime}
        stopCount={stopCount}
        setStopCount={setStopCount}
        setTimerValue={setTimerValue}
        countdown={countdown}
      /> */}
      <TestTimer
        seconds={seconds}
        setSeconds={setSeconds}
        isActive={isActive}
        setIsActive={setIsActive}
        timeTotal={timeTotal}
        setTimeTotal={setTimeTotal}
        timerVal={timerVal}
        setTimerVal={setTimerVal}
      />
      <IconToggle collection={testData} select={handleSelect} deselect={handleDeselect} selected={selected} />
    </div>
  );
}

export default App;
