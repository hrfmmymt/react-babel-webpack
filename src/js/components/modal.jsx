import React from "react";

class ModalWindow extends React.Component {
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
      this.dialog.focus();
    }
  }

  render() {
    const {id, visible} = this.props;

    return (
      <div
        ref={c => {
          this.dialog = c;
        }}
        className="modal__window"
        id={id}
        role="dialog"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        aria-hidden={visible === false}
        tabIndex="0"
        >
        {this.props.children}
      </div>
    );
  }
}
ModalWindow.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node,
  visible: React.PropTypes.bool
};

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {visible} = this.state;

    return (
      <div className="modal__area">
        <div
          className={visible ? "modal__overlay on" : "modal__overlay off"}
          onClick={this.handleClick}
          />
        <button
          type="button"
          onClick={this.handleClick}
          aria-controls="dialog"
          aria-expanded={visible === true}
          >
          open modal
        </button>
        <ModalWindow id="dialog" visible={visible}>
          <h3 id="dialogTitle">Modal opened!</h3>
          <p id="dialogDesc">We have a modal window.</p>
          <span>Stay tune in Tokyo friday night.</span>
          <button
            type="button"
            onClick={this.handleClick}
            >
            Close
          </button>
        </ModalWindow>
      </div>
    );
  }
}
