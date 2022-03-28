import React, { useState } from "react";
import "./TaskPage.scss";
import Header from "../../components/Header/Header";
import addIcon from "../../assets/add.svg";
import AddColumnModal from "./components/Modal/AddColumnModal";
import TaskBoard from "./components/TaskBoard";

function TaskPage() {
  const [modalColumn, setModalColumn] = useState(false);

  return (
    <div className="taskPage">
      <Header title="Task" />
      <div className="content">
        <button className="cta" onClick={() => setModalColumn(true)}>
          <img src={addIcon} alt="add Icon"></img>
        </button>
        {modalColumn && (
          <AddColumnModal isOpen={modalColumn} setIsOpen={setModalColumn} />
        )}
        <TaskBoard />
      </div>
    </div>
  );
}

export default TaskPage;
