import React, { useState, useEffect, useRef, memo } from "react";

const LifecycleComponentFunctional = memo(
  ({ count }) => {
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
      } else didMountRef.current = true;
    });

    return (
      <>
        <h1>LifecycleComponent</h1>
      </>
    );
  },
  (oldProps, newProps) => {
    return newProps.count % 2 !== 0;
  }
);

export default LifecycleComponentFunctional;
