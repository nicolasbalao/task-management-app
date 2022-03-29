import React from "react";
import styled from "styled-components";

const EventContainer = styled.div`
  background-color: #b7cef1;
  border-radius: 10px;

  padding: 0.5rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  cursor: pointer;


`;

const EventTitle = styled.span`
  font-size: 1.4rem;
  color: #649aed;
  font-weight: 700;

  margin: 0 0.5rem;
`;

const EventTimes = styled.span`
  color: #649aed;
  font-size: 1.2rem;

  align-self: flex-end;
`;

function EventDays({ data }) {
  return (
    <EventContainer>
      <EventTitle>{data.title}</EventTitle>
      {/* {event.from !== "" && (
        <EventTimes>{`${event.from}-${event.to}`}</EventTimes>
      )} */}

      <EventTimes>{`${data.from}-${data.to}`}</EventTimes>
    </EventContainer>
  );
}

export default EventDays;
