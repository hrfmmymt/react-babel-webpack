import React from "react";
import {Link} from "react-router";

export default React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/table-section" activeClassName="active">Table</Link></li>
          <li><Link to="/infinite-section" activeClassName="active">Infinite</Link></li>
          <li><Link to="/modal-section" activeClassName="active">Modal</Link></li>
        </ul>
      </nav>
    );
  }
});
