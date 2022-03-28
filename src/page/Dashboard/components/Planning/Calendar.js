import "./Calendar.scss";
import {
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isBefore,
  isEqual,
} from "date-fns";

function Calendar({ currentDate, activeDate, setActiveDate, tasks }) {
  //STATE
  const firstDay = startOfWeek(startOfMonth(currentDate));
  const lastDay = endOfWeek(endOfMonth(currentDate));
  const datesOfMonth = eachDayOfInterval({ start: firstDay, end: lastDay });

  //FUNCTION
  function formatDate(date) {
    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth()
    ) {
      return "date --currentDate";
    }
    if (
      date.getDate() === activeDate.getDate() &&
      date.getMonth() === activeDate.getMonth()
    ) {
      return "date --active";
    }
    if (isBefore(date, currentDate)) {
      return "date --pas";
    }

    return "date";
  }

  return (
    <div className="calendar">
      <span className="day">SUN</span>
      <span className="day">MON</span>
      <span className="day">TUE</span>
      <span className="day">WED</span>
      <span className="day">THU</span>
      <span className="day">FRI</span>
      <span className="day">SAT</span>
      {datesOfMonth.map((date, index) => (
        <div
          className={formatDate(date)}
          key={date.getMonth + index}
          onClick={() => setActiveDate(date)}
        >
          {date.getDate()}
          {tasks.map((task, index) =>
            task.date.getDate() === date.getDate() &&
            task.date.getMonth() === date.getMonth() ? (
              <div className="dote" key={`task ${index}`}></div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
