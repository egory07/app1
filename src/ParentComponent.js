import React from "react";
import { useState } from "react";
import ChildComponent from "./MyComponents/ChildComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const randomValue = () => {
    let randomValue = Math.ceil(Math.random() * 10);
    setCounter(randomValue);
  };
  const decreaseValue = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={randomValue}>Случайное значение</button>
      <button onClick={decreaseValue}>Уменьшить </button>
      <ChildComponent userName="Yuri" />
    </>
  );
};

export default ParentComponent;
