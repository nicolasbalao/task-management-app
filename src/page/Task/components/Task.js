import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { TaskContext } from "../../../context/taskContext";

const TaskContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 5px;

  min-width: 200px;

  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;

  background-color: #e9e6f2;
`;

const DelTask = styled.button`
  margin-left: 1rem;
  background-color: transparent;

  padding: 0.5rem;

  cursor: pointer;
`;

const Tags = styled.span`
  padding: 0.5rem 0.8rem;
  text-align: center;

  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;

  background-color: #4a1cdc;
  color: white;
  margin: 1rem 1rem 0 0;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagsContainer = styled.div`
  border-top: solid 1px lightgrey;

  margin-top: 1.5rem;
  display: flex;
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
          <Header>
            <Title>{task.content}</Title>

            <DelTask onClick={() => delTask(columnId, task.id)}>X</DelTask>
          </Header>
          <TagsContainer>
            {task.tags.length !== 0 &&
              task.tags.map(
                (tag, indexTask) =>
                  tag !== "" && (
                    <Tags key={`${task.id}-tags-${indexTask}`}>{tag}</Tags>
                  )
              )}
          </TagsContainer>
        </TaskContainer>
      )}
    </Draggable>
  );
}

export default Task;
