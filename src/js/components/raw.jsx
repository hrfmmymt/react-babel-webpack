import React from "react";

export default class Raw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "foo",
      value2: ["bar", "baz"]
    };
    this.onhandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        value1: "bar"
      };
    });
  }

  render() {
    return (
      <div>
        <RawChild data={this.state.value1} handleClick={this.onhandleClick} />
      </div>
    );
  }
}

const RawChild = props => (
  <div onClick={props.handleClick}>
    {props.data}
  </div>
);
RawChild.propTypes = {
  handleClick: React.PropTypes.func,
  data: React.PropTypes.string
};
