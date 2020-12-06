import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import Timer from "./Timer";
import TestTimer from "./TestTimer";
import IconToggle from "./IconToggle";
import SelectedIconDisplay from "./SelectedIconDisplay";
import SecondTestTimer from "./SecondTestTimer";

function App() {
  //this would be coming from provider context durrrr
  const getHealing = () => {
    return fetch("http://localhost:8088/healings/1").then((res) => res.json());
  };

  //zis would also be in ze treatment contex yahs
  const getTreatments = () => {
    return fetch("http://localhost:8088/treatments")
      .then((res) => res.json())
      .then(setTreatments);
  };

  //pretend like this is coming from treatment context
  const [treatments, setTreatments] = useState([]);
  const [healing, setHealing] = useState({selected:[]})

  useEffect(() => {
    getTreatments().then(() => {
      getHealing().then(setHealing)
    })
  }, [])

  useEffect(() => {
    setSelected(healing.selected)
  }, [healing])

  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    setSelected([...selected, item]);
  };
  const handleDeselect = (id) => {
    const newArray = selected.filter((selectedItem) => selectedItem.id !== id);
    setSelected(newArray);
  };

  const [timer, setTimer] = useState({
    timerVal: 0,
    remaining: 0,
    isActive: false,
    timeTotal: 0,
  });

  const handleSessionTotalChange = (e) => {
    const newTotal = parseInt(e.target.value);
    setTimer((timer) => ({
      ...timer,
      timeTotal: newTotal,
    }));
  };

  return (
    <div className="App">
      <div>Editing {healing.id}</div>
      <SecondTestTimer timer={timer} setTimer={setTimer}>
        <div>
          <label htmlFor="sessionTotal">Session Total: </label>
        </div>
      </SecondTestTimer>
      <label htmlFor="sessionTotal">Editable Session Total: </label>
      <input
        type="number"
        name="sessionTotal"
        value={timer.timeTotal}
        onChange={handleSessionTotalChange}
      />
      <IconToggle
        collection={treatments}
        select={handleSelect}
        selected={selected}
      />
      <SelectedIconDisplay selected={selected} deselect={handleDeselect} />
    </div>
  );
}

export default App;
