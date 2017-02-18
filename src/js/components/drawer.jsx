import React from "react";
import Nav from "../components/nav.jsx";

class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      children: this.props.children,
      visible: this.props.visible
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.menu.focus();
    }
  }

  render() {
    const {id, visible} = this.props;

    return (
      <div
        ref={c => {
          this.menu = c;
        }}
        id={id}
        role="navigation"
        className="menu"
        aria-hidden={visible === false}
        tabIndex="0"
        >
        {this.props.children}
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node,
  visible: React.PropTypes.bool
};

export default class Drawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  onClick() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {visible} = this.state;

    return (
      <div className="drawer__area">
        <button
          onClick={this.onClick.bind(this)}
          aria-controls="navigation"
          aria-expanded={visible === true}
          >
          {visible ? "Hide menu" : "Show menu"}
        </button>
        <DrawerMenu id="navigation" visible={visible}>
          <Nav />
        </DrawerMenu>
      </div>
    );
  }
}
