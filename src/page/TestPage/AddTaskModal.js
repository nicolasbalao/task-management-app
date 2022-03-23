import React, { useContext, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { TaskContext } from "../../context/taskContext";

function AddTaskModal({ isOpen, setIsOpen, index }) {
  Modal.setAppElement("#root");

  const { addTask } = useContext(TaskContext);

  const [tasksContentInput, setTaskContentInput] = useState("");
  const [tasksTagsInput, setTaskTagsInput] = useState("");

  const handleContent = (e) => {
    setTaskContentInput(e.target.value);
  };

  const handleTags = (e) => {
    setTaskTagsInput(e.target.value);
  };

  const inputControl = () => {
    return tasksContentInput !== "" && tasksTagsInput !== "";
  };

  return (
    <Modal isOpen={isOpen}>
      <h1>Test</h1>
      <input
        type="text"
        value={tasksContentInput}
        onChange={handleContent}
      ></input>
      <input type="text" value={tasksTagsInput} onChange={handleTags}></input>

      <button
        onClick={() => (
          setIsOpen(false),
          inputControl() && addTask(index, tasksContentInput, tasksTagsInput)
        )}
      >
        {" "}
        Save
      </button>
    </Modal>
  );
}

export default AddTaskModal;
