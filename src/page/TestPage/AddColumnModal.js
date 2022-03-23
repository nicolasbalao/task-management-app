import React, { useContext, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { TaskContext } from "../../context/taskContext";

function AddColumnModal({ isOpen, setIsOpen }) {
  Modal.setAppElement("#root");

  const { addColumn } = useContext(TaskContext);

  const [columnTitle, setColumnTitle] = useState("");

  const handleContent = (e) => {
    setColumnTitle(e.target.value);
  };

  const inputControl = () => {
    return columnTitle !== "";
  };

  return (
    <Modal isOpen={isOpen}>
      <h1>Test</h1>
      <input type="text" value={columnTitle} onChange={handleContent}></input>

      <button
        onClick={() => (
          setIsOpen(false), inputControl() && addColumn(columnTitle)
        )}
      >
        {" "}
        Save
      </button>
    </Modal>
  );
}

export default AddColumnModal;
