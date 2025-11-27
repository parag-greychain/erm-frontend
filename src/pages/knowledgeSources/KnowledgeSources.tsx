import React, { useState } from "react";
import { Card, Avatar, Badge, Button, Space, Input } from "antd";
import {
  ApartmentOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import CustomPagination from "../../components/pagination/CustomPagination";
import CreateSourcesModal from "./createSourcesModal/CreateSourcesModal";

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

const KnowledgeSources: React.FC = () => {
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  const sampleCardData: CardData[] = [
    {
      title: "Socioeconomic",
      status: "active",
      description:
        "Host your own AI deep research agent with Weaved, Apify and OpenAI o3 Host your own AI deep...",
      owner: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      date: "10 Aug, 2025",
    },
    {
      title: "Healthcare Analytics",
      status: "active",
      description:
        "Advanced healthcare data analytics platform powered by machine learning algorithms for predictive patient care...",
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
        "Real-time environmental monitoring system tracking carbon emissions and providing actionable insights for sustainability Real-time environmental monitoring system tracking carbon emissions and providing actionable insights for",
      owner: {
        name: "Emma Thompson",
        avatar: "https://i.pravatar.cc/150?img=23",
      },
      date: "22 Jul, 2025",
    },
    {
      title: "Education Platform",
      status: "active",
      description:
        "Interactive learning management system with AI-powered personalized curriculum for K-12 students worldwide...",
      owner: {
        name: "James Wilson",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
      date: "05 Oct, 2025",
    },
  ];

  return (
    <div className="agent-page-container">
      <div className="page-header">
        <div className="page-title">Knowledge Sources</div>
        <div className="agent-header-right">
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
            onClick={() => {
              setIsSourcesModalOpen(true);
            }}
          >
            Create
          </Button>
        </div>
      </div>
      <div className="agent-page-body">
        <div className="agent-row">
          {sampleCardData.map((card, index) => (
            <Card className="agent-card" key={index}>
              <div className="header-and-body">
                <div className="card-header">
                  <div className="header-left">
                    <div className="main-icon">
                      <ApartmentOutlined />
                    </div>
                    <h2 className="card-title">{card.title}</h2>
                  </div>
                  <Badge
                    status="success"
                    text="Active"
                    className="status-badge"
                  />
                </div>
                <p className="card-description">{card.description}</p>
              </div>

              <div className="card-footer">
                <Space size={12} className="owner-info">
                  <Avatar size={32} src={card.owner.avatar} />
                  <div className="owner-details">
                    <div className="owner-label">Owner</div>
                    <div className="owner-name">{card.owner.name}</div>
                  </div>
                </Space>
                <div className="card-date">{card.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="agent-footer">
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
          handleCancel={() => {
            setIsSourcesModalOpen(false);
          }}
          handleSubmit={() => {
            setIsSourcesModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default KnowledgeSources;
