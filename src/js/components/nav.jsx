import React from "react";
import {Link} from "react-router";

export default React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
});
