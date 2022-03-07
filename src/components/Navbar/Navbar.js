import "./Navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardActiveIcon from "../../assets/dashboardActiveIcon.png";
import dashboardIcon from "../../assets/dashboard.png";
import taskIcon from "../../assets/taskIcon.png";
import taskIconActive from "../../assets/TaskActiveIcon.png"
import calendarIcon from "../../assets/calendarIcon.png";
import calendarActiveIcon from "../../assets/calendarActiveIcon.png"
import projectIcon from "../../assets/projectIcon.png";
import projectActiveIcon from "../../assets/projectActiveIcon.png"

function Navbar() {
  const [currentActive, setCurrentActive] = useState("dashboard");

  return (
    <div className="navBar">
      <div className="logo">
        <h1>T</h1>
      </div>
      <nav>
        <ul>
          <Link
            to="/"
            className={currentActive === "dashboard" ? "active" : null}
            onClick={() => setCurrentActive("dashboard")}

          >
            <img src={currentActive === "dashboard" ? dashboardActiveIcon : dashboardIcon} alt="link to page" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="task"
            className={currentActive === "task" ? "active" : null}
            onClick={() => setCurrentActive("task")}

          >
            <img src={currentActive === "task" ? taskIconActive : taskIcon} alt="link to page" />
            <span>Task</span>
          </Link>
          <Link
            to="calendar"
            className={currentActive === "calendar" ? "active" : null}
            onClick={() => setCurrentActive("calendar")}

          >
            <img src={currentActive === "calendar" ? calendarActiveIcon : calendarIcon} alt="link to page" />
            <span>Calendar</span>
          </Link>
          <Link
            to="project"
            className={currentActive === "project" ? "active" : null}
            onClick={() => setCurrentActive("project")}
          >
            <img src={currentActive === "project" ? projectActiveIcon : projectIcon} alt="link to page" />
            <span>Project</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
