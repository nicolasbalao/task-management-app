import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import Weather from "../../components/Widget/Weather/Weather";
import Crypto from "../../components/Widget/Crypto/Crypto";
import ProjectResume from "../../components/Widget/ProjectResume/ProjectResume";

function Dashboard() {
  return (
    <div className="dashboardPage">
      <Header title="Dashboard" />
      <div className="content">
        <Weather/>
        <div className="test2"></div>
        <Crypto/>
        <ProjectResume/>
        <div className="test4"></div>
      </div>
    </div>
  );
}

export default Dashboard;
