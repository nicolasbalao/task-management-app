import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import "./Planning.scss";
import tasks from "../../../schema/tasksPlanning";
import Tasks from "../Task/Tasks";

function Planning() {
  //STATE
  const [tasksToDisplay, setTasksToDisplay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(currentDate);

  //FONCTION
  function getTasksActiveDate() {
    const result = tasks.filter((task) => {
      if (
        task.date.getDate() === activeDate.getDate() &&
        task.date.getMonth() === activeDate.getMonth()
      ) {
        return task;
      }
    });

    return result;
  }

  //USE EFFECT
  useEffect(() => {
    const [taskUpdate] = getTasksActiveDate();
    if (taskUpdate !== undefined) {
      setTasksToDisplay(taskUpdate);
    } else {
      setTasksToDisplay(null);
    }
  }, [activeDate]);

  return (
    <div className="planning">
      <div className="top">
        <Calendar
          currentDate={currentDate}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          tasks={tasks}
        />
        <h2>Planning</h2>
        {tasksToDisplay !== null
          ? tasksToDisplay.tasks.map((task, index) => (
              <div className="task" key={task.name + index}>
                <div className="task__hours">{task.from}</div>
                <div className="task__sep"></div>
                <div className="task__description">
                  <div className="task__description_title">{task.name}</div>
                  <div className="task__description_text">
                    {task.description}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <Tasks />
    </div>
  );
}

export default Planning;
