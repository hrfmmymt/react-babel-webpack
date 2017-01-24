import React, {Component} from "react";
import List from "../components/list.jsx";

export default class ListSection extends Component {
  render() {
    return (
      <section className="wrapper area__list">
        <h2>Lists from server (by superagent)</h2>
        <List />
      </section>
    );
  }
}