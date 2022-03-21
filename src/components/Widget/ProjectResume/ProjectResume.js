import React, { useEffect, useState } from "react";
import "./ProjectResume.scss";
import designProject from "../../../assets/designProject.png";

function ProjectResume() {
  const [tasks, updateTasks] = useState([
    {
      title: "create wireframe",
      tags: ["design", "figma"],
      done: false,
    },
    {
      title: "create weather widget",
      tags: ["front", "dev"],
      done: false,
    },
    {
      title: "create weather widget",
      tags: ["front", "dev"],
      done: false,
    },
    {
      title: "create weather widget",
      tags: ["front", "dev"],
      done: false,
    },
  ]);

  console.log(tasks);

  function updateDoneTask(index) {
    const temp_state = [...tasks];

    const copyElement = { ...tasks[index] };

    copyElement.done = !copyElement.done;

    temp_state[index] = copyElement;


    updateTasks(temp_state);
  }

  return (
    <div className="projectResumeWidget">
      <div className="projectResumeWidget__title">Task manager</div>
      <div className="projectResumeWidget__description">
        <div className="projectResumeWidget__description_text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </div>
        <div className="projectResumeWidget__description_design">
          <img src={designProject} alt="design of project" />
        </div>
      </div>
      <div className="projectResumeWidget__task_title">Tasks</div>
      <div className="projectResumeWidget__taskContainer">
        {tasks.map((task, index) => (
          <div
            className={task.done ? "task done" : "task"}
            key={`ProjectTasks ${index}`}
          >
            <div className="task__number">{index + 1}</div>
            <div className="task__title">{task.title}</div>
            <div className="task__tagsContainer">
              {task.tags.map((tag, index) => (
                <div className="tags" key={`tags project ${index}`}>{tag}</div>
              ))}
            </div>
            <input
              type="checkbox"
              onClick={() => updateDoneTask(index)}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectResume;
