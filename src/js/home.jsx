import React from "react";

import Input from "./components/input.jsx";
import ListSection from "./components/list-section.jsx";

export default React.createClass({
  render() {
    return (
      <div>
        <Input />
        <ListSection />
      </div>
    );
  }
});
