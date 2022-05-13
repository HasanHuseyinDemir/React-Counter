import React from "react";

export default function Count({ count, setCount }) {
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div align="center" className="counters">
      <span id="count" className={count == 0 ? "" : count > 0 ? "high" : "low"}>
        {count}
      </span>
      <br />
      <button className="buttons" onClick={increase}>
        +
      </button>
      <button className="buttons" onClick={decrease}>
        -
      </button>
    </div>
  );
}
