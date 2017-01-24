import React from "react";
import {render} from "react-dom";

import Header from "./components/header.jsx";
import Input from "./components/input.jsx";
import ListSection from "./components/list-section.jsx";

import Style from "../css/style.css";

render(
  <div>
    <Header />
    <Input />
    <ListSection />
  </div>,
  document.getElementById("app")
);
