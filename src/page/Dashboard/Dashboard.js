import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import Weather from "../../components/Widget/Weather/Weather";
import Crypto from "../../components/Widget/Crypto/Crypto";

function Dashboard() {
  return (
    <div className="dashboardPage">
      <Header title="Dashboard" />
      <div className="content">
        <Weather/>
        <Crypto/>
        <div className="test2"></div>
        <div className="test4"></div>
      </div>
    </div>
  );
}

export default Dashboard;
