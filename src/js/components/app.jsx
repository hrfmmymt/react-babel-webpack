import React from "react";

export default class App extends React.Component {
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
      <div>
        <input type="text" placeholder="webpack" onChange = {this.onChange.bind(this)} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}