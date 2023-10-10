import React from "react";
import { useState } from "react";
import ChildComponent from "./MyComponents/ChildComponent";
import SiblingComponent from "./MyComponents/SiblingComponent";

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
      <h1>Счетчик: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={randomValue}>Случайное значение</button>
      <button onClick={decreaseValue}>Уменьшить </button>

      <ChildComponent userName="Yuri" counter={counter} />
      <br />
      <SiblingComponent />
    </>
  );
};

export default ParentComponent;
