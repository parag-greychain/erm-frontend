import { Avatar, Dropdown, type MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import "./AppLayout.scss";

const AppLayout = () => {
  const items: MenuProps["items"] = [
    {
      key: "configuration",
      label: "Configuration",
      icon: <i className="erm-icon settings"></i>,
      className: "common-dropdown-item",
    },
    {
      key: "guides",
      label: "Guides",
      icon: <i className="erm-icon guides"></i>,
      className: "common-dropdown-item",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <i className="erm-icon logout"></i>,
      className: "common-dropdown-item",
    },
  ];
  return (
    <div className="main-layout">
      <SideBar />
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Avatar className="user-profile-icon">S</Avatar>
      </Dropdown>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
