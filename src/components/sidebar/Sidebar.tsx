import { Menu, Select } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES, PATHS } from "../../shared";
import "./Sidebar.scss";
import ChatHistory from "../chat/chatHistory/ChatHistory";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Listen to the global toggleSidebar event
    const toggleHandler = () => setCollapsed((prev) => !prev);
    window.addEventListener("toggleSidebar", toggleHandler);
    return () => window.removeEventListener("toggleSidebar", toggleHandler);
  }, []);

  const handleNewChat = () => {
    navigate(PATHS.chat);
  };

  const menuItems = [
    {
      key: "newchat",
      icon: (
        <div className="icon-wrapper">
          <i className="erm-icon chat"></i>
        </div>
      ),
      label: "New Chat",
      className: "common-dropdown-item",
      onClick: () => handleNewChat(),
    },
    {
      key: "home",
      icon: (
        <div className="icon-wrapper">
          <i className="erm-icon home"></i>
        </div>
      ),
      label: "Home",
      className: "common-dropdown-item",
      onClick: () => navigate(PATHS.home),
    },
    {
      key: "projects",
      icon: (
        <div className="icon-wrapper">
          <i className="erm-icon my-project"></i>
        </div>
      ),
      label: "My Projects",
      className: "common-dropdown-item",
      onClick: () => navigate(PATHS.projects),
    },
    {
      key: "agent",
      icon: (
        <div className="icon-wrapper">
          <i className="erm-icon agent"></i>
        </div>
      ),
      label: (
        <div>
          <span>Agent </span>
          <Select
            classNames={{
              popup: {
                root: "feedback-select-dropdown",
              },
            }}
            placeholder="Select Agent"
            value={"1"}
            options={[
              { value: "1", label: "Knowledge AI" },
              { value: "2", label: "Report Builder" },
            ]}
          />
        </div>
      ),
      className: "common-dropdown-item",
      onClick: () => navigate(PATHS.chat),
    },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <button
            className="toggle-btn"
            aria-label="Toggle Sidebar"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("toggleSidebar"))
            }
          >
            <i className="erm-icon toggle"></i>
          </button>
          <Link to="/">
            <img className="logo-icon" src={IMAGES.logo} alt="ERM logo" />
          </Link>
        </div>
      </div>

      <Menu
        mode="vertical"
        items={menuItems}
        theme="dark"
        className="sidebar-menu"
      />
      <ChatHistory />
    </aside>
  );
};

export default Sidebar;
