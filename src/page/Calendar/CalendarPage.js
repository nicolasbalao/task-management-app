import React, { useState } from "react";
import "./CalendarPage.scss";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { usePlanningContext } from "../../context/planningContext";
import CalendarMonth from "./components/CalendarMonth";

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 3.5rem;
  padding-top: 6rem;
`;

const ViewContainer = styled.div`
  align-self: flex-start;

  display: flex;
  align-items: center;
  gap: 3rem;

  padding: 0.5rem 1rem;

  background-color: white;

  border-radius: 10px;
`;

const ViewLabel = styled.div`
  color: #7638c6;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;

const ViewLabelActive = styled.div`
  background-image: linear-gradient(177deg, #7638c6 0%, #3710e6 100.41%);
  color: white;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 5px;

  cursor: pointer;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
`;

const DateLabel = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const DateChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DateChange = styled.div`
  color: white;
  border-radius: 50%;
`;

function Calendar() {
  const [monthView, setMonthView] = useState(true);


  return (
    <div className="calendarPage">
      <Header title="Calendar" />
      <Content>
        <ViewContainer>
          {monthView ? (
            <>
              <ViewLabelActive onClick={() => setMonthView(!monthView)}>
                Month
              </ViewLabelActive>{" "}
              <ViewLabel onClick={() => setMonthView(!monthView)}>
                Week
              </ViewLabel>
            </>
          ) : (
            <>
              <ViewLabel onClick={() => setMonthView(!monthView)}>
                Month
              </ViewLabel>
              <ViewLabelActive onClick={() => setMonthView(!monthView)}>
                Week
              </ViewLabelActive>
            </>
          )}
        </ViewContainer>
        <CalendarMonth />
      </Content>
    </div>
  );
}

export default Calendar;
