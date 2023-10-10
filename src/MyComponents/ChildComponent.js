import React from "react";

const ChildComponent = ({ userName, counter }) => {
  return (
    <div>
      Привет, {userName}. Текущий счетчик: {counter}.
    </div>
  );
};

export default ChildComponent;
