import React from "react";
import {render} from "react-dom";
import {IndexRoute, Link, Router, Route, browserHistory} from "react-router";

import Index from "./index.jsx";
import Home from './home.jsx';
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";

import Style from "../css/style.css";

render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById("app")
);
