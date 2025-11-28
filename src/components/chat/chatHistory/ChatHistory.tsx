import { Link } from "react-router-dom";
import { PATHS } from "../../../shared";
import "./ChatHistory.scss";

const recents = [
  { id: 1, title: "Zero-Code API Integration Platform" },
  { id: 2, title: "Document Builder Agent Icon" },
  { id: 3, title: "Research Image Sources" },
  { id: 4, title: "Enterprise AI Knowledge" },
  { id: 5, title: "Enterprise AI Knowledge" },
];
const ChatHistory = () => {
  return (
    <div className="sidebar-recents">
      <div className="sidebar-recents-wrap">
        <div className="recents-header">Your chats</div>
        <div className="recents-list">
          {recents.map((item) => (
            <Link
              key={item.id}
              to={`${PATHS.chat}/${item.id}`}
              className={`recent-item ${item.id === 2 ? "active" : ""}`}
            >
              <div>{item.title}</div>
              <span className="project-agent-text">
                CPD Report Builder, Shell
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
