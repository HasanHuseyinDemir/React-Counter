import { useState } from "react";
import Count from "./count";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 align="center">Simple Counter</h1>
      <Count count={count} setCount={setCount} />
    </div>
  );
}
