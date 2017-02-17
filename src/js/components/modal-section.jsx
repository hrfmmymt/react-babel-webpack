import React from "react";
import Modal from "../components/modal.jsx";

export default class ModalSection extends React.Component {

  render() {
    return (
      <div className="wrapper modal">
        <h2>Modal</h2>
        <Modal />
      </div>
    );
  }
}
