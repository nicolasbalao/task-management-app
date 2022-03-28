import React, { createContext, useContext, useState } from "react";
import dataset from "../page/Task/data";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState(dataset);

  //DEL TASK
  const delTask = (columnId, taskId) => {
    //remove task from task props

    const newTasks = data.tasks;
    delete newTasks[taskId];

    console.log(newTasks);

    //remove taskId from column
    const newTaskIds = data.columns[columnId].taskIds;
    newTaskIds.splice(newTaskIds.indexOf(taskId, 1));

    const newColumn = {
      ...data.columns[columnId],
      taskIds: newTaskIds,
    };

    const newState = {
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [columnId]: newColumn,
      },
    };

    setData(newState);
    return;
  };

  //ADD TASK
  const addTask = (index, title, tags) => {
    const taskId = `task-${Object.keys(data.tasks).length + 1}`;
    console.log(taskId);

    const newTags = tags.split(" ");
    console.log("newtags", newTags);

    const task = {
      id: taskId,
      content: title,
      tags: newTags,
    };

    // create new object tasks for update the state
    const newTasks = {
      ...data.tasks,
      [taskId]: task,
    };

    //create new taskIds for the column to add task
    const newTasksIds = [
      ...data.columns[`column-${index + 1}`].taskIds,
      taskId,
    ];

    console.log("test: ", newTasksIds);

    const newSate = {
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [`column-${index + 1}`]: {
          ...data.columns[`column-${index + 1}`],
          taskIds: newTasksIds,
        },
      },
    };

    console.log("new state: ", newSate);

    setData(newSate);
    return;
  };

  //addColumn
  const addColumn = (title) => {
    const columnId = `column-${data.columnOrder.length + 1}`;
    console.log(columnId);

    const Column = {
      id: columnId,
      title: title,
      taskIds: [],
    };

    //NewStateColumn
    const newColumn = {
      ...data.columns,
      [columnId]: Column,
    };

    const newColumnOrder = [...data.columnOrder, columnId];

    const newState = {
      ...data,
      columns: newColumn,
      columnOrder: newColumnOrder,
    };

    setData(newState);
    return;
  };

  //DEL COLUMN

  const delColumn = (columnId) => {
    const newColumns = data.columns;
    delete newColumns[columnId];

    const newColumnOrder = data.columnOrder;
    newColumnOrder.splice(newColumnOrder.indexOf(columnId), 1);

    const newState = {
      ...data,
      columns: newColumns,
      columnOrder: newColumnOrder,
    };

    setData(newState);
    return;
  };

  return (
    <TaskContext.Provider
      value={{ data, setData, delTask, addTask, addColumn, delColumn }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
