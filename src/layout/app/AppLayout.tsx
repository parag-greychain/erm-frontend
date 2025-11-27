import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
