import React from "react";

import Header from "./components/header.jsx";

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});
