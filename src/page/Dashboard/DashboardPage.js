import "./DashboardPage.scss";
import Header from "../../components/Header/Header";
import Weather from "../../components/Widget/Weather/Weather";
import Crypto from "../../components/Widget/Crypto/Crypto";
import ProjectResume from "../../components/Widget/ProjectResume/ProjectResume";
import Planning from "../../components/Widget/Planning/Planning";

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
