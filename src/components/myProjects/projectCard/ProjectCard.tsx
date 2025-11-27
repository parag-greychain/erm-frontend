import {
  Avatar,
  Badge,
  Button,
  Card,
  Dropdown,
  Space,
  type MenuProps,
} from "antd";
import React from "react";
import "./ProjectCard.scss";

interface ProjectCardProps {
  index: number;
  project: {
    title: string;
    status: "active" | "inactive";
    description: string;
    owner: {
      name: string;
      avatar: string;
    };
    date: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>Leave Project</span>,
    },
  ];
  return (
    <Card className="project-card" key={index}>
      <div className="header-and-body">
        <div className="card-header">
          <div className="header-left">
            <div className="main-icon">
              <i className="erm-icon doc-icon" />
            </div>
            <h2 className="card-title">{project.title}</h2>
          </div>
          <div className="card-status-dropdown">
            <Badge
              status={project.status === "active" ? "success" : "default"}
              text={project.status === "active" ? "Active" : "Inactive"}
              className="status-badge"
            />
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottom"
              overlayClassName="three-dot-menu-dropdown"
            >
              <Button
                type="text"
                size="small"
                className="transparent-btn"
                icon={<i className="erm-icon three-dot-icon" />}
              />
            </Dropdown>
          </div>
        </div>
        <p className="card-description">{project.description}</p>
      </div>

      <div className="card-footer">
        <Space size={12} className="owner-info">
          <div className="owner-details">
            <span className="collaborators-heading">Collaborators</span>
            <div className="collaborators-images">
              <Avatar size={30} src={project.owner.avatar} />
              <Avatar size={30} src={project.owner.avatar} />
              <Avatar size={30} src={project.owner.avatar} />
              <span className="collaborators-plus-more">+2</span>
            </div>
          </div>
        </Space>
        <div className="files-count">26 Files</div>
      </div>
    </Card>
  );
};

export default ProjectCard;
