import React from "react";
import List from "../components/list.jsx";

export default React.createClass({
  render() {
    return (
      <section className="wrapper area__list">
        <h2>Lists from server (by superagent)</h2>
        <List />
      </section>
    );
  }
});
