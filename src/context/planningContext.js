import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { createContext, useContext, useState } from "react";
import { dataset } from "../page/Calendar/planningData";

export const PlanningContext = createContext({});

export const PlanningProvider = ({ children }) => {
  //SET UP DATES
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(currentDate);

  const firstDayMonth = startOfWeek(startOfMonth(currentDate));
  const lastDayMonth = endOfWeek(endOfMonth(currentDate));
  const datesOfMonth = eachDayOfInterval({
    start: firstDayMonth,
    end: lastDayMonth,
  });

  const nameOfDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  //SET UP DATA Planning
  const [data, setData] = useState(dataset);

  //LOGIC

  const sameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
    );
  };

  return (
    <PlanningContext.Provider
      value={{
        currentDate,
        datesOfMonth,
        data,
        setData,
        setActiveDate,
        usePlanningContext,
        nameOfDay,
        sameDate,
        activeDate,
      }}
    >
      {children}
    </PlanningContext.Provider>
  );
};

export const usePlanningContext = () => useContext(PlanningContext);
