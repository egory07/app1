import React from "react";

const SiblingComponent = () => {
  const [textMessage, setTextMessage] = React.useState("Some text.");
  const changeTextMsg = () => {
    setTextMessage("REDEV");
  };
  return (
    <>
      <span>{textMessage + " "}</span>
      <button onClick={changeTextMsg}>Изменить текст</button>
    </>
  );
};

export default SiblingComponent;
