import React from "react";
import InfiniteList from "../components/infinite-list.jsx";

export default React.createClass({
  render() {
    return (
      <div className="wrapper infSection">
        <h2>Infinite-List</h2>
        <InfiniteList />
      </div>
    );
  }
});
