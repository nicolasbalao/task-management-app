import React from "react";

function TaskItem({ name, index, description, tags, date }) {
  return (
    <div className="task">
      <div className="task__title">
        <span className="task__number">{index + 1}</span>
        <span>{name}</span>
      </div>
      <div className="task__description">{description}</div>
      <div className="task__tagsContainer">
        {tags.map((tag, index) => (
          <span className="tag" key={`taskBoard tag${index}`}>
            {tag}
          </span>
        ))}
      </div>
      <span className="task__date">{date.getDate()}</span>
    </div>
  );
}

export default TaskItem;
