import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import "./AppLayout.scss";
import { Avatar } from "antd";

const AppLayout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <Avatar className="user-profile-icon">S</Avatar>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
