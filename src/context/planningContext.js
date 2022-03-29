import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import addMonths from "date-fns/addMonths";
import React, { createContext, useContext, useState } from "react";
import { dataset } from "../page/Calendar/planningData";

export const PlanningContext = createContext({});

export const PlanningProvider = ({ children }) => {
  //SET UP DATES
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(currentDate);

  const firstDayMonth = startOfWeek(startOfMonth(activeDate));
  const lastDayMonth = endOfWeek(endOfMonth(activeDate));
  const datesOfMonth = eachDayOfInterval({
    start: firstDayMonth,
    end: lastDayMonth,
  });

  const nameOfDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const nameOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //SET UP DATA Planning
  const [data, setData] = useState(dataset);

  //LOGIC

  const sameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
    );
  };

  const addMonthActiveDate = () => {
    setActiveDate(addMonths(activeDate, 1));
    console.log("active date: ", activeDate);
    return;
  };

  const subMonthActiveDate = () => {
    setActiveDate(addMonths(activeDate, -1));
    return;
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
        nameOfMonth,
        sameDate,
        activeDate,
        addMonthActiveDate,
        subMonthActiveDate,
      }}
    >
      {children}
    </PlanningContext.Provider>
  );
};

export const usePlanningContext = () => useContext(PlanningContext);
