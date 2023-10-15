//memo реализовать
import React, { useState, useEffect, useRef, memo } from "react";

const LifecycleComponentFunctional = memo(
  () => {
    let [count, setCount] = useState(0);
    const didMountRef = useRef(false);

    useEffect(() => {
      fetch("https://www.boredapi.com/api/activity/")
        .then((res) => res.json())
        .then((res) => console.log(res.activity))
        .catch((err) => console.log("error is:" + err));
      return () => console.log("Component will unmount");
    }, []);

    useEffect(() => {
      if (didMountRef.current) {
        console.log("component did update");
        console.log(count);
      } else didMountRef.current = true;
    });

    let increaseCount = () => {
      setCount(count + 1);
    };

    return (
      <>
        <h1>LifecycleComponent</h1>
        <button onClick={increaseCount}>Increase</button>
      </>
    );
  },
  () => {
    return true;
  }
);

export default LifecycleComponentFunctional;
