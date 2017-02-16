import React from "react";
import {render} from "react-dom";
import {IndexRoute, Link, Router, Route, browserHistory} from "react-router";

import Index from "./index.jsx";
import Home from './home.jsx';
import TableSection from "./components/table-section.jsx";
import InfiniteSection from "./components/infinite-section.jsx";
import ModalSection from "./components/modal-section.jsx";
import RawSection from "./components/raw-section.jsx";
import DrawerSection from "./components/drawer-section.jsx";

import Style from "../css/style.css";

render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="/table-section" component={TableSection} />
      <Route path="/infinite-section" component={InfiniteSection} />
      <Route path="/modal-section" component={ModalSection} />
      <Route path="/raw-section" component={RawSection} />
      <Route path="/drawer-section" component={DrawerSection} />
    </Route>
  </Router>,
  document.getElementById("app")
);
