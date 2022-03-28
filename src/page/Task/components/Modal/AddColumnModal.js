import React, { useContext, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { TaskContext } from "../../../../context/taskContext";
import { Title, Save, CloseModal, Label } from "./styles";

function AddColumnModal({ isOpen, setIsOpen }) {
  Modal.setAppElement("#root");

  const { addColumn, data } = useContext(TaskContext);

  const [columnTitle, setColumnTitle] = useState("");

  const handleContent = (e) => {
    setColumnTitle(e.target.value);
  };

  const inputControl = () => {
    if (columnTitle === "") {
      alert("Name is Empty");
      return false;
    }

    if (
      data.columnOrder.every(
        (columnId) => data.columns[columnId].title !== columnTitle
      ) === false
    ) {
      alert("Column exist");
      return false;
    }

    return true;
  };

  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          margin: "25% auto",
          width: "20rem",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          textAlign: "center",
          position: "relative",
        },
      }}
    >
      <Title>New Column</Title>
      <CloseModal onClick={() => setIsOpen(false)}>X</CloseModal>

      <div>
        <Label>Name: </Label>
        <input value={columnTitle} onChange={handleContent}></input>
      </div>

      <Save
        onClick={() => (
          setIsOpen(false), inputControl() && addColumn(columnTitle)
        )}
      >
        {" "}
        Save
      </Save>
    </Modal>
  );
}

export default AddColumnModal;
