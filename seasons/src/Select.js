import React from "react";

const Select = (props) => {
  const { onSelect, collection, currentValue, label } = props;
  return (
    <div classname="selector">
      <select value={currentValue} onChange={(e) => onSelect(e.target.value)}>
        <option value={0}>Select an option</option>
        {collection.map((i) => {
          return <option value={i.id}>{i[label]}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;

