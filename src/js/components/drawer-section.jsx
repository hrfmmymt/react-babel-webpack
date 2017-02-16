import React from "react";
import Drawer from "../components/drawer.jsx";

export default React.createClass({
  render() {
    return (
      <div className="wrapper drawer">
        <h2>Drawer</h2>
        <Drawer />
      </div>
    );
  }
});
