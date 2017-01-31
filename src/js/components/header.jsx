import React from "react";
import {Link} from "react-router";
import Nav from "../components/nav.jsx";

export default React.createClass({
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1><Link to="/">Header</Link></h1>
          <Nav />
        </div>
      </header>
    );
  }
});
