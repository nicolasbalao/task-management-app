import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { TaskContext } from "../../context/taskContext";
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskList = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.isDraggingOver && "lightblue"};
  min-height: 100px;

  flex-grow: 1;
`;

const DelColumn = styled.button`
  padding: 0.3rem;
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

function Column({ column, tasks, index }) {
  const { addTask, delColumn } = useContext(TaskContext);

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Header>
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            <DelColumn onClick={() => delColumn(column.id)}>X</DelColumn>
          </Header>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    columnId={column.id}
                  />
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
