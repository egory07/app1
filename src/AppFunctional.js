import React, { useState, useEffect } from "react";
import LifecycleComponentFunctional from "./MyComponents/LifecycleComponentFunctional";

const AppFunctional = () => {
  let [show, setShow] = useState(true);
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const deleteComp = () => {
    setShow(false);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {show && <LifecycleComponentFunctional count={count} />}

      <button onClick={increaseCount}>Increase</button>
      <button onClick={deleteComp}>Delete</button>
    </div>
  );
};

export default AppFunctional;
