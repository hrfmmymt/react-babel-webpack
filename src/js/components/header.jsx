import React, {Component} from "react";
import Nav from "../components/nav.jsx";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1><a href="/">Header</a></h1>
          <Nav />
        </div>
      </header>
    );
  }
}
