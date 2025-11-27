import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import ProjectCard from "../../components/myProjects/projectCard/ProjectCard";
import CustomPagination from "../../components/pagination/CustomPagination";
import CreateSourcesModal from "../knowledgeSources/createSourcesModal/CreateSourcesModal";
import "./Projects.scss";

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

const Projects = () => {
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

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

  return (
    <div className="projects-page-container">
      <div className="page-header">
        <div className="page-title">Projects</div>
      </div>
      <div className="projects-filter-wrapper">
        <div className="projects-header-right">
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
      <div className="projects-page-body">
        <div className="projects-row">
          {sampleCardData.map((card, index) => (
            <ProjectCard key={index} index={index} project={card} />
          ))}
        </div>
      </div>
      <div className="projects-footer">
        <CustomPagination
          currentPage={1}
          pageSize={10}
          total={50}
          handlePagination={(page) => {
            console.log(page);
          }}
          isHidePagination={false}
        />
      </div>
      {isSourcesModalOpen && (
        <CreateSourcesModal
          isOpen={isSourcesModalOpen}
          handleCancel={() => setIsSourcesModalOpen(false)}
          handleSubmit={() => setIsSourcesModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Projects;
