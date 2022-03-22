import Navbar from "./components/Navbar/Navbar";
import "./style/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./page/Dashboard/DashboardPage";
import CalendarPage from "./page/Calendar/CalendarPage";
import TaskPage from "./page/Task/TaskPage";
import ProjectPage from "./page/ProjectPage/ProjectPage";
import TestPage from "./page/TestPage/TestPage";
import { TaskProvider } from "./context/taskContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="task" element={<TaskPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route
            path="test"
            element={
              <TaskProvider>
                <TestPage />
              </TaskProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
