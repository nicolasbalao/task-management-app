import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 1rem;
`;
const TaskList = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.isDraggingOver && "lightblue"};
  min-height: 100px;

  flex-grow: 1;
`;

// PROPS

// const draggableSnapshot = {
//     isDragging: true,
//     draggingOver: 'column-1'
// }

// const droppableSnapshot = {
//     isDraggingOver: true,
//     draggingOverWith: 'task-1'
// }

function Column({ column, tasks, index, data, setData }) {
  const addTask = () => {
    const taskId = `task-${Object.keys(data.tasks).length + 1}`;
    console.log(taskId);

    const task = {
      id: taskId,
      content: "End DND React",
      tags: ["front"],
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

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
                <button onClick={() => addTask(index)}>Add task</button>
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
