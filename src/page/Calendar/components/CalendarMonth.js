import { isSameDay } from "date-fns";
import React from "react";
import styled from "styled-components";
import { usePlanningContext } from "../../../context/planningContext";
import EventDays from "./EventDays";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 0.3fr repeat(4, 1fr);

  border-radius: 10px;
  overflow: hidden;
`;

const NameDay = styled.div`
  background-image: linear-gradient(177deg, #7638c6 0%, #3710e6 100.41%);
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid grey;
`;

const DayContainer = styled.div`
  height: 12rem;

  padding: 0 1rem 0.3rem;
  overflow: auto;
  display: flex;
  flex-direction: column;

  scrollbar-width: none;
  background-color: white;

  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const DayDate = styled.span`
  align-self: flex-end;
  font-size: 1.6rem;
  font-weight: 700;
  color: grey;

  background-color: ${(props) =>
    isSameDay(props.date, props.activeDate) && "lightgrey"};

  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  margin-bottom: 0.5rem;
`;

const DayDateCurrent = styled.span`
  align-self: flex-end;
  font-size: 1.6rem;
  font-weight: 700;
  color: white;

  margin: 1rem;
  padding: 0.5rem;
  background-image: linear-gradient(177deg, #7638c6 0%, #3710e6 100.41%);

  border-radius: 10px;
`;

function CalendarMonth() {
  const {
    nameOfDay,
    datesOfMonth,
    sameDate,
    currentDate,
    setActiveDate,
    activeDate,
    data,
  } = usePlanningContext();

  return (
    <CalendarContainer>
      {nameOfDay.map((name) => (
        <NameDay key={name}>{name}</NameDay>
      ))}
      {datesOfMonth.map((date, index) => (
        <DayContainer key={`day ${index}`}>
          {sameDate(currentDate, date) ? (
            <DayDateCurrent
              onClick={() => setActiveDate(date)}
              date={date}
              activeDate={activeDate}
            >
              {date.getDate()}
            </DayDateCurrent>
          ) : (
            <DayDate
              onClick={() => setActiveDate(date)}
              date={date}
              activeDate={activeDate}
            >
              {date.getDate()}
            </DayDate>
          )}
          {data.dates.map((dataDate) => {
            if (
              dataDate.date.getDate() === date.getDate() &&
              dataDate.date.getMonth() === date.getMonth()
            ) {
              console.log("data: ", data);
              console.log("date of month", datesOfMonth);
              return dataDate.events.map((eventId, index) => (
                <EventDays
                  key={`event ${date.getDate()} ${index}`}
                  data={data.events[eventId]}
                />
              ));
            }
          })}
        </DayContainer>
      ))}
    </CalendarContainer>
  );
}

export default CalendarMonth;
