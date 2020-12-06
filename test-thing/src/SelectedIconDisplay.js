import React from "react";
import "./App.css"

export default (props) => {
  const { selected, deselect } = props;
  return (
    <div className="App"> 
      <h1>selected
      </h1>
      <div className="App">
      {selected.map((i) => (
        <div style={{display: `flex`, justifyContent: `center`}}>
          <div>{i.name}</div>
              <div onClick={() => deselect(i.id)}>-</div>
        </div>
      ))}
        </div>
    </div>
  );
};
