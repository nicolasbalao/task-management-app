import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useTaskContext } from "../../../context/taskContext";
import AddTaskModal from "./Modal/AddTaskModal";
import Task from "./Task";

const Container = styled.div`
  margin: 1rem 2rem;
  padding: 1rem;

  min-width: 200px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: white;
  border-radius: 10px;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const Title = styled.h2`
  padding: 1rem;

  font-size: 2rem;
  color: #403b7b;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskList = styled.div`
  background-color: ${(props) => props.isDraggingOver && "#682fcd"};
  min-height: 100px;

  border-radius: 5px;

  padding: 1rem;
  margin: 1rem;
  flex-grow: 1;
`;

const DelColumn = styled.button`
  padding: 0.3rem;
  background-color: transparent;

  cursor: pointer;
`;

const ButtonAddTask = styled.button`
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 700;

  color: grey;

  cursor: pointer;
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
  const { delColumn } = useTaskContext();
  const [isOpen, setIsOpen] = useState(false);

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
              <>
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
                </TaskList>
                <ButtonAddTask onClick={() => setIsOpen(true)}>
                  {" "}
                  + Add task
                </ButtonAddTask>
                {isOpen && (
                  <AddTaskModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    index={index}
                  />
                )}
              </>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
