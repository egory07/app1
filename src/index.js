import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppClass";
// для переключения c классовой реализации компонента
// на функциональную - поменять адресс импорта App с "./AppClass"
// на "./AppFunctional";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
