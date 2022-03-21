import React, { useState } from "react";
import "./TaskPage.scss";
import Header from "../../components/Header/Header";
import addIcon from "../../assets/add.svg";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import taskBoardListSchema from "../../schema/taskBoardSchema";

function TaskPage() {
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
      </div>
    </div>
  );
}

export default TaskPage;
