import React from "react";

const SeasonDisplay = (props) => {
  const { handleSelect, color, lat } = props;
  console.log(lat);
  return (
    <>
      <div>{lat}</div>
      <select onChange={handleSelect} value={color}>
        <option value={"default"}>Choose color</option>
        {["green", "brown", "blue"].map((color) => {
          return <option value={color}>{color}</option>;
        })}
      </select>
    </>
  );
};

export default SeasonDisplay;
