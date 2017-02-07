import React from "react";
import Modal from "../components/modal.jsx"

export default class ModalSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  openModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    return (
      <div className="wrapper modal">
        <h2>Modal</h2>
        <button type="button" onClick={() => this.openModal()}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h3>Hello, Modal!</h3>
          <p>We have a modal window.</p>
          <span>Stay tune in Tokyo friday night.</span>
          <button type="button" onClick={() => this.closeModal()}>Close</button>
        </Modal>
      </div>
    );
  }
}
