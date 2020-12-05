import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import TestTimer from "./TestTimer";
import IconToggle from "./IconToggle";
import SelectedIconDisplay from "./SelectedIconDisplay";
import SecondTestTimer from "./SecondTestTimer";

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

  const [timerValues, setTimerValues] = useState({
    timerVal: 0,
    seconds: 0,
    isActive: false,
    timeTotal: 0,
  });

  return (
    <div className="App">
      <header className="App-header">TIMER</header>
      <div className="app">
        <IconToggle
          collection={testData}
          select={handleSelect}
          selected={selected}
        />
        <SelectedIconDisplay selected={selected} deselect={handleDeselect} />
        <SecondTestTimer timerValues={timerValues} setTimerValues={setTimerValues}/>
      </div>
    </div>
  );
}

export default App;





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