import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SeasonDisplay from "./SeasonDisplay";
import Select from "./Select";
import {buildQueryString} from "./utils/helpers"

if (module.hot) {
  module.hot.accept();
}

const Parent = () => {
  const categories = [
    { id: 1, color: "blue" },
    { id: 2, color: "brown" },
    { id: 3, color: "purple" },
  ];

  const treatments = [
    { id: 1, treatment: "lickin" },
    { id: 2, treatment: "stickin" },
    { id: 3, treatment: "prickin" },
  ];
  const [catId, setCatId] = useState(0);
  const [treatmentId, setTreatmentId] = useState(0);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (Object.values(filters).some(value => value !== 0)) {
      console.log(buildQueryString(filters));
    }
  }, [filters]);

  useEffect(() => {
    setFilters({ category: parseInt(catId), treatment: parseInt(treatmentId) });
  }, [catId, treatmentId]);

  return (
    <>
      <Select
        onSelect={setTreatmentId}
        collection={treatments}
        label="treatment"
        currentValue={treatmentId}
        optionText="Filter by treatment"
      />
      <Select
        onSelect={setCatId}
        collection={categories}
        label="color"
        currentValue={catId}
        optionText="filter by color"
      />
    </>
  );
};

class App extends React.Component {
  state = { lat: null, errorMsg: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, color: "" }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log(this.state.color);
  }

  render() {
    return (
      <>
        <Parent />
        <SeasonDisplay
          lat={this.state.lat}
          color={this.state.color}
          handleSelect={(e) => this.setState({ color: e.target.value })}
        />
        {this.state.lat ? (
          <div> Latitude: {this.state.lat}</div>
        ) : this.state.errorMsg ? (
          <div>{this.state.errorMsg}</div>
        ) : (
          <div class="ui text loader">Loading</div>
        )}
        <div>{this.state.time}</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
