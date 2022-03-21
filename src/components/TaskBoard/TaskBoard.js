import React from "react";
import "./TaskBoard.scss";
import TaskItem from "./TaskItem";

function TaskBoard({ name, tasks }) {
  return (
    <div className="taskBoard">
      <div className="taskBoard__header">
        <span className="taskBoard__title">{name}</span>
        <span className="taskBoard__numberTasks">({tasks.length})</span>
      </div>
      {tasks.map((task, index) => (
        <TaskItem
          name={task.name}
          nameOfBoard={name}
          index={index}
          description={task.description}
          date={task.creationDate}
          tags={task.tags}
          task={task}
          key={`taskOfBoard ${index}`}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
