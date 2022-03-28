import React, { useContext } from "react";
import "./Tasks.scss";
import { TaskContext } from "../../../../context/taskContext";

function Tasks() {
  const { data } = useContext(TaskContext);

  return (
    <div className="tasksWidget">
      <h1>Tasks</h1>
      <div className="tasksContainer">
        {Object.values(data.tasks).map((task, index) => (
          <div className="tasks" key={`tasksWidget${index}`}>
            <div className="tasks__title">{task.content}</div>
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
