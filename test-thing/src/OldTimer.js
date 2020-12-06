<div>
<div>Time remaining: {countdown}</div>
<div>Total time: {totalTime}</div>
<div>Timer value: {timerValue}</div>
<div>{timerOn ? `Timer is On` : `Timer is OFF`}</div>
<div>Stop Count:{stopCount}</div>
</div>


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

      //seconds is the current duration left for the timer to count
// timer Val is what the countdown duration is set to be every time
// we start from the beginning
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [timeTotal, setTimeTotal] = useState(0);
//   const [timerVal, setTimerVal] = useState(0);

// <TestTimer
// timerValues={timerValues}
// seconds={seconds}
// setSeconds={setSeconds}
// isActive={isActive}
// setIsActive={setIsActive}
// timeTotal={timeTotal}
// setTimeTotal={setTimeTotal}
// timerVal={timerVal}
// setTimerVal={setTimerVal}
// />
