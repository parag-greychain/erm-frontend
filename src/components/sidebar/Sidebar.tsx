import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES, PATHS } from "../../shared";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [recents] = useState([
    { id: 1, title: "Zero-Code API Integration Platform" },
    { id: 2, title: "Document Builder Agent Icon" },
    { id: 3, title: "Research Image Sources" },
    { id: 4, title: "Enterprise AI Knowledge" },
    { id: 5, title: "Enterprise AI Knowledge" },
  ]);

  useEffect(() => {
    // Listen to the global toggleSidebar event
    const toggleHandler = () => setCollapsed((prev) => !prev);
    window.addEventListener("toggleSidebar", toggleHandler);
    return () => window.removeEventListener("toggleSidebar", toggleHandler);
  }, []);

  const handleNewChat = () => {
    navigate("/");
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
          <i className="erm-icon agent"></i>
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
          <i className="erm-icon agent"></i>
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
          <i className="erm-icon source"></i>
        </div>
      ),
      label: "Agent",
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

      <div className="sidebar-recents">
        <div className="sidebar-recents-wrap">
          <div className="recents-header">Recents</div>
          <div className="recents-list">
            {recents.map((item) => (
              <Link
                key={item.id}
                to={`/chat/${item.id}`}
                className="recent-item"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
