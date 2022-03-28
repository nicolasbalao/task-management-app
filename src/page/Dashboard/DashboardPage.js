import "./DashboardPage.scss";
import Header from "../../components/Header/Header";
// import Weather from "../../components/Widget/Weather/Weather";
// import Crypto from "./components/Crypto/Crypto";
// import ProjectResume from "../../components/Widget/ProjectResume/ProjectResume";
// import Planning from "../../components/Widget/Planning/Planning";
import Weather from "./components/Weather/Weather"
import Planning from "./components/Planning/Planning"
import Crypto from "./components/Crypto/Crypto";
import ProjectResume from "./components/ProjectResume/ProjectResume"
function Dashboard() {
  return (
    <div className="dashboardPage">
      <Header title="Dashboard" />
      <div className="content">
        <Weather/>
        <Planning/>
        <Crypto/>
        <ProjectResume/>
      </div>
    </div>
  );
}

export default Dashboard;
