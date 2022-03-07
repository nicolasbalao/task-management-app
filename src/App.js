import Navbar from './components/Navbar/Navbar';
import './style/App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "./page/Dashboard/Dashboard"
import Calendar from "./page/Calendar/Calendar"
import Task from "./page/Task/Task"
import Project from "./page/ProjectPage/Project"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="task" element={<Task/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="project" element={<Project/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
