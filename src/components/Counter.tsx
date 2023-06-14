import { useState } from "react";
import classes from "./Conter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button onClick={increment}>Counter</button>
    </div>
  );
};
