import React, { useState } from "react";
import "./TaskPage.scss";
import Header from "../../components/Header/Header";
import addIcon from "../../assets/add.svg";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import tasksList from "../../schema/tasks";

function Task() {
  const [boardName, setBoardName] = useState(["To-do", "Done"]);

  return (
    <div className="taskPage">
      <Header title="Task" />
      <div className="content">
        <button className="cta">
          <img src={addIcon} alt="add Icon"></img>
        </button>
        <div className="headerBoard">
          <span># Task name</span>
          <span>Description</span>
          <span>Tags</span>
          <span>Date</span>
        </div>

        {boardName.map((name) => (
            <TaskBoard name={name} tasks={tasksList} />
        ))}
      </div>
    </div>
  );
}

export default Task;
