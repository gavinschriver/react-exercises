import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import TestTimer from "./TestTimer";
import IconToggle from "./IconToggle";
import SelectedIconDisplay from "./SelectedIconDisplay";
import SecondTestTimer from "./SecondTestTimer";

function App() {

  //pretending like we're getting sometthing in edit mode
  const [healing, setHealing] = useState({});
  const [treatments, setTreatments] = useState([])

  //this would be coming from provider context durrrr
  const getHealing = () => {
    return fetch("http://localhost:8088/healings/1")
      .then((res) => res.json())
  };

  //zis would also be in ze treatment contex yahs
  const getTreatments = () => {
    fetch("http://localhost:8088/treatments")
      .then((res) => res.json())
      .then(setTreatments);
  };

  useEffect(() => {
    getTreatments()
    getHealing().then(setHealing);
  }, []);
  


  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    setSelected([...selected, item]);
  };
  const handleDeselect = (id) => {
    const newArray = selected.filter((selectedItem) => selectedItem.id !== id);
    setSelected(newArray);
  };


  const testValuesToSubmit = () => {
    console.log({ selectedIds: selected });
  };

  //copypasta ripoff attempts
  // set this to also pass in array of values for increments to populate select bar
  //.. or make some default setting for the select bar intervals?
  const [timerValues, setTimerValues] = useState({
    timerVal: 0,
    remaining: 0,
    isActive: false,
    timeTotal: 0,
  });

  // const [healing, setHealing] = useState()
  //in edit mode, this should be initialized as the val from
  // the resource being edited
  const [sessionTotal, setSessionTotal] = useState(0);

  const handleSessionTotalChange = (e) => {
    const newTotal = parseInt(e.target.value);
    setSessionTotal(newTotal);
  };

  useEffect(() => {
    if (timerValues.timeTotal > 0) {
      setSessionTotal((sessionTotal) => sessionTotal + 1);
    }
  }, [timerValues.timeTotal]);

  return (
    <div>
      <div className="app">
        <div>Editing healing {healing.id}</div>
        <IconToggle
          collection={treatments}
          select={handleSelect}
          selected={selected}
        />
        <SelectedIconDisplay selected={selected} deselect={handleDeselect} />

        
        <SecondTestTimer
          timerValues={timerValues}
          setTimerValues={setTimerValues}
        >
          <input
            type="number"
            value={sessionTotal}
            onChange={handleSessionTotalChange}
          />
        </SecondTestTimer>
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
