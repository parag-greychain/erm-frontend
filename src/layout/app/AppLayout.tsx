import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import UserDropdown from "../../components/userDropdown/userDropdown";
import "./AppLayout.scss";

const AppLayout = () => {

  return (
    <div className="main-layout">
      <SideBar />
      <UserDropdown />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
