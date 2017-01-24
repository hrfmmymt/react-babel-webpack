import React from "react";

export default class Input extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {message: ""};
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div className="wrapper area__input">
        <h2>Input</h2>
        <input type="text" placeholder="input here" onChange = {this.onChange.bind(this)} />
        <h2>Output</h2>
        <p>{this.state.message}</p>
      </div>
    )
  }
}