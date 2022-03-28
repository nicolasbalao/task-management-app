import React, { useContext, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { TaskContext } from "../../../../context/taskContext";
import { Title, Save, CloseModal, Label } from "./styles";

function AddTaskModal({ isOpen, setIsOpen, index }) {
  Modal.setAppElement("#root");

  const { addTask, data } = useContext(TaskContext);

  const [tasksContentInput, setTaskContentInput] = useState("");
  const [tasksTagsInput, setTaskTagsInput] = useState("");

  const handleContent = (e) => {
    setTaskContentInput(e.target.value);
  };

  const handleTags = (e) => {
    setTaskTagsInput(e.target.value);
  };

  const inputControl = () => {
    if (tasksContentInput === "") {
      alert("name of task empty");
      return false;
    }

    if(Object.values(data.tasks).every((task) => task.content !== tasksContentInput ) === false){
      alert("Task exist")
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
      <Title>Create new Task</Title>
      <CloseModal onClick={() => setIsOpen(false)}> X</CloseModal>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label>Name: </Label>
        <input
          type="text"
          value={tasksContentInput}
          onChange={handleContent}
          placeholder="cook"
        ></input>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label>Tags: </Label>
        {/* <textarea type="text" value={tasksTagsInput} onChange={handleTags} style={{width: "145px"}}></textarea> */}
        <input
          type="text"
          value={tasksTagsInput}
          onChange={handleTags}
          style={{ width: "145px" }}
          placeholder="tag1 tag2"
        ></input>
      </div>

      <Save
        onClick={() => (
          setIsOpen(false),
          inputControl() && addTask(index, tasksContentInput, tasksTagsInput)
        )}
      >
        {" "}
        Save
      </Save>
    </Modal>
  );
}

export default AddTaskModal;
