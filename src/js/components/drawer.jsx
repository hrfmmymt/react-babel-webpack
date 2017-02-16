import React from "react";
import {Link} from "react-router";
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
    if(!prevProps.visible && this.props.visible) {
      this.refs.menu.focus();
    }
  }

  render() {
    const {id, visible} = this.props;

    return(
      <div ref="menu" id={id} role="navigation" className="menu" aria-hidden={visible ? false : true} tabIndex="0">
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

  onClick(index) {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="drawer__area">
        <button
          onClick={this.onClick.bind(this)}
          aria-controls="navigation"
          aria-expanded={visible ? true : false}>
          {visible ? "Hide menu" : "Show menu"}
        </button>
        <DrawerMenu id="navigation" visible={visible}>
          <Nav />
        </DrawerMenu>
      </div>
    );
  }
}