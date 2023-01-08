import MainBox from "./MainBox";
import Sidebar from "./Sidebar";
import Notes from "./Notes";

const Dashboard = () => {
  return (
    <div className="flex flex-row flex-wrap w-screen h-screen overflow-hidden">
      <Sidebar />
      <Notes />
      <MainBox />
    </div>
  );
};

export default Dashboard;
