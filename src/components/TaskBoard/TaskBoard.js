import React from "react";
import "./TaskBoard.scss";
import TaskItem from "./TaskItem";

function TaskBoard({ name, tasks }) {
  return (
    <div className="taskBoard" onDrop={()=>console.log("drop")} >
      <div className="taskBoard__header">
        <span className="taskBoard__title">{name}</span>
        <span className="taskBoard__numberTasks">({tasks.length})</span>
      </div>
      {tasks.map((task, index) => (
        <TaskItem
          name={task.name}
          index={index}
          description={task.description}
          date={task.creationDate}
          tags={task.tags}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
