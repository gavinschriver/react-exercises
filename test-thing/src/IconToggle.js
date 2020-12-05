import React from "react";

export default (props) => {
  const { collection, select, selected } = props;
  console.log(selected);

  return (
    <div>
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
    </div>
  );
};
