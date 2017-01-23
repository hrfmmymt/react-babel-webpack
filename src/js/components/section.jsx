import React, {Component} from "react";
import List from "../components/list.jsx";

export default class Section extends Component {
  render() {
    return (
      <section className="section">
        <h2>Lists</h2>
        <List />
      </section>
    );
  }
}