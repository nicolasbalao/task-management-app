import React from "react";
import "./Tasks.scss";
import tasks from "../../../schema/tasks";

function Tasks() {
  return (
    <div className="tasksWidget">
      <h1>Tasks</h1>
      <div className="tasksContainer">
        {tasks.map((task, index) => (
          <div className="tasks" key={`tasksWidget${index}`}>
            <div className="tasks__title">{task.name}</div>
            <div className="tasks__tagsContainer">
              {task.tags.map((tag, index) => (
                <div className="tags" key={`tasks tags ${index}`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
