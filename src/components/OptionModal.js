import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = props => (
  <Modal
    onRequestClose={props.handleCloseModal}
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
