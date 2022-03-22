import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { TaskContext } from "../../context/taskContext";

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

const DelTask = styled.button`
  padding: 0.5rem;
  margin-left: 1rem;
`;

const Tags = styled.span`
  padding: 0.5rem;
  text-align: center;

  background-color: #4a1cdc;
  color: white;
  margin: 0 1rem;
`;

function Task({ task, index, columnId }) {
  const { delTask } = useContext(TaskContext);

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
          {task.tags.map((tag) => (
            <Tags>{tag}</Tags>
          ))}
          <DelTask onClick={() => delTask(columnId, task.id)}>X</DelTask>
        </TaskContainer>
      )}
    </Draggable>
  );
}

export default Task;
