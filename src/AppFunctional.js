import React, { useState } from "react";
import LifecycleComponentFunctional from "./MyComponents/LifecycleComponentFunctional";

const AppFunctional = () => {
  let [show, setShow] = useState(true);

  const deleteComp = () => {
    setShow(false);
  };
  return (
    <div>
      {show && <LifecycleComponentFunctional />}
      <button onClick={deleteComp}>Delete</button>
    </div>
  );
};

export default AppFunctional;
