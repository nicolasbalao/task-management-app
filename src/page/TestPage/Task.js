import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const TaskContainer = styled.div`
  padding: 1rem;
  border: 1px solid red;
  margin: 1rem 0;

  display: flex;
  align-items: center;

  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

const Handle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  background-color: orange;

  margin-right: 10px;
`;

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps} // can be grab for drag
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle />
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
}

export default Task;
