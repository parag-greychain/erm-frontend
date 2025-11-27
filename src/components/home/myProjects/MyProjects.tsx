import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu } from "antd";
import { useState } from "react";
import CreateSourcesModal from "../../../pages/knowledgeSources/createSourcesModal/CreateSourcesModal";
import ProjectCard from "../../myProjects/projectCard/ProjectCard";
import "./MyProjects.scss";

interface CardData {
  title: string;
  status: "active" | "inactive";
  description: string;
  owner: {
    name: string;
    avatar: string;
  };
  date: string;
}

const STATUS = {
  ACTIVE: "Active",
  ARCHIVED: "Archived",
};
const MyProjects = () => {
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
  const [status, setStatus] = useState(STATUS.ACTIVE);

  const sampleCardData: CardData[] = [
    {
      title: "Socioeconomic",
      status: "active",
      description:
        "Host your own AI deep research agent with Weaved, Apify and OpenAI...",
      owner: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      date: "10 Aug, 2025",
    },
    {
      title: "Healthcare Analytics",
      status: "active",
      description: "Advanced healthcare data analytics platform...",
      owner: {
        name: "Dr. Michael Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      date: "15 Sep, 2025",
    },
    {
      title: "Climate Action",
      status: "inactive",
      description:
        "Real-time environmental monitoring system tracking carbon emissions...",
      owner: {
        name: "Emma Thompson",
        avatar: "https://i.pravatar.cc/150?img=23",
      },
      date: "22 Jul, 2025",
    },
    {
      title: "Socioeconomic",
      status: "active",
      description:
        "Host your own AI deep research agent with Weaved, Apify and OpenAI...",
      owner: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      date: "10 Aug, 2025",
    },
    {
      title: "Healthcare Analytics",
      status: "active",
      description: "Advanced healthcare data analytics platform...",
      owner: {
        name: "Dr. Michael Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      date: "15 Sep, 2025",
    },
    {
      title: "Climate Action",
      status: "inactive",
      description:
        "Real-time environmental monitoring system tracking carbon emissions...",
      owner: {
        name: "Emma Thompson",
        avatar: "https://i.pravatar.cc/150?img=23",
      },
      date: "22 Jul, 2025",
    },
  ];

  const handleClick = (e: any) => {
    setStatus(e.key);
  };

  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key={STATUS.ACTIVE}>{STATUS.ACTIVE}</Menu.Item>
      <Menu.Item key={STATUS.ARCHIVED}>{STATUS.ARCHIVED}</Menu.Item>
    </Menu>
  );
  return (
    <section className="home-my-projects">
      <div className="container">
        <div className="home-page-project-container">
          <div className="page-header">
            <div className="page-header-top">
              <div className="page-title">My Projects</div>
              <Button
                type="primary"
                className="transparent-btn"
                iconPosition="end"
                icon={<i className="erm-icon arrow-right-icon" />}
              >
                VIEW ALL
              </Button>
            </div>
            <div className="page-header-bottom">
              <div className="status-dropdown" hidden>
                <div className="status-label">Status:</div>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <Button className="status-pill" type="text">
                    <span className="pill-text">{status}</span>
                    <i className="erm-icon dropdown-arrow-icon" />
                  </Button>
                </Dropdown>
              </div>
              <div></div>

              <div className="page-header-right">
                <Input
                  className="search-input"
                  placeholder="Search..."
                  prefix={<SearchOutlined />}
                />
                <Button
                  type="primary"
                  shape="round"
                  className="primary-btn"
                  icon={<PlusOutlined />}
                  onClick={() => setIsSourcesModalOpen(true)}
                >
                  REQUEST PROJECT
                </Button>
              </div>
            </div>
          </div>

          <div className="home-project-page-body">
            <div className="home-project-row">
              {sampleCardData.map((card, index) => (
                <ProjectCard key={index} index={index} project={card} />
              ))}
            </div>
          </div>

          {isSourcesModalOpen && (
            <CreateSourcesModal
              isOpen={isSourcesModalOpen}
              handleCancel={() => setIsSourcesModalOpen(false)}
              handleSubmit={() => setIsSourcesModalOpen(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
