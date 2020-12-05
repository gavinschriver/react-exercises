import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import TestTimer from "./TestTimer";
import IconToggle from "./IconToggle";
import SelectedIconDisplay from "./SelectedIconDisplay";

function App() {
  const testData = [
    { id: 1, name: "apple" },
    { id: 2, name: "food" },
    { id: 3, name: "third" },
    { id: 4, name: "NOICE" },
    { id: 5, name: "farnsk" },
  ];

  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    setSelected([...selected, item]);
  };

  const handleDeselect = (id) => {
    console.log();
    const newArray = selected.filter((selectedItem) => selectedItem.id !== id);
    setSelected(newArray);
  };

  const testValuesToSubmit = () => {
    console.log({ selectedIds: selected });
  };

  //copypasta ripoff attempts

  //seconds is the current duration left for the timer to count
  // timer Val is what the countdown duration is set to be every time 
  // we start from the beginning 
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [timeTotal, setTimeTotal] = useState(0);
  const [timerVal, setTimerVal] = useState(10);

  const [timerValues, setTimerValues] = useState({
    second: 0,
    isActive: false,
    totalTime: 0,
  });

  return (
    <div className="App">
      <header className="App-header">TIMER</header>


      <div className="app">

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
        <IconToggle
          collection={testData}
          select={handleSelect}
          selected={selected}
        />
        <SelectedIconDisplay selected={selected} deselect={handleDeselect} />
      </div>
    </div>
  );
}

export default App;
