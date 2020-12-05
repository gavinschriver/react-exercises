import React from "react";

export default (props) => {
  const { selected, deselect } = props;
  return (
    <div> 
      <h1>selected</h1>
      {selected.map((i) => (
        <div style={{ display: `flex` }}>
          <div>{i.name}</div>
              <div onClick={() => deselect(i.id)}>-</div>
        </div>
      ))}
    </div>
  );
};
