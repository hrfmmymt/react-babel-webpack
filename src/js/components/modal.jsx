import React from "react";

export default class Modal extends React.Component {

  close(e) {
    e.preventDefault();
    if(this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if(this.props.isOpen === false) {
      return null;
    }
    return(
      <div className="modal__wrap">
        <div className="modal__window">
          {this.props.children}
        </div>
        <div className="modal__bg" onClick={e => this.close(e)}></div>
      </div>
    );
  }
}