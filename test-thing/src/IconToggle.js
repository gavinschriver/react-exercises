import React from "react";

export default (props) => {
  const { collection, select, selected, deselect} = props;
  console.log(selected);

  return (
    <div className="app">
      <div>FIGHT ME</div>
      {collection.map((i) => (
        <button
          onClick={() => select(i)}
          style={{ backgroundColor: `red` }}
              key={i.id}
              disabled={selected.some(s => s.id === i.id)}
        >
          {i.name}
        </button>
      ))}
          {selected.map(i => <div style={{display: `flex`}}><div>{i.name}</div><div onClick={() => deselect(i.id)}>-</div></div>)}
    </div>
  );
};
