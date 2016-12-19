import React from "react";
import {render} from "react-dom";

import Hello from "./components/hello.jsx";
import ReactBabel from "./components/react-babel.jsx";
import App from "./components/app.jsx";

import styles from "../css/style.css";

render(
  <div>
    <Hello />
    <ReactBabel />
    <App />
  </div>,
  document.getElementById("app")
);