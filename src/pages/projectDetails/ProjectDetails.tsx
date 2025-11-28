import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  List,
  Row,
  Table,
  Tag,
  type CheckboxChangeEvent,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CustomPagination from "../../components/pagination/CustomPagination";
import UserDropdown from "../../components/userDropdown/userDropdown";
import { IMAGES } from "../../shared";
import "./ProjectDetails.scss";

const ProjectDetails: React.FC = () => {
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const collaborators = [
    { name: "Oliver Bennett", role: "Technical Partner", status: "Left" },
    { name: "Sophie Harrington", role: "Partner" },
    { name: "James Whitmore", role: "Project Coordinator" },
    { name: "Ethan Rowley", role: "Project Coordinator" },
    { name: "Charlotte Hughes", role: "Project Coordinator" },
  ];

  const filesData = new Array(6).fill(null).map((_, i) => ({
    key: i,
    title: "Document Title",
    path: "ERM>Communities>Marine",
    lastSynced: i === 0 ? "10 hours ago" : "4:05 PM 24 Nov 2025",
  }));

  const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([]);

  const allSelected =
    filesData.length > 0 && selectedRowKeys.length === filesData.length;

  const toggleSelectAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedRowKeys(filesData.map((f) => f.key));
    } else {
      setSelectedRowKeys([]);
    }
  };

  const columns = [
    {
      title: (
        <Checkbox
          className="custom-check"
          checked={allSelected}
          onChange={toggleSelectAll}
        />
      ),
      dataIndex: "checkbox",
      key: "checkbox",
      width: 48,
      render: (_: any, record: any) => (
        <Checkbox
          className="custom-check"
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRowKeys((prev) => [...prev, record.key]);
            } else {
              setSelectedRowKeys((prev) =>
                prev.filter((k) => k !== record.key)
              );
            }
          }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: any) => (
        <div className="file-title">
          <div className="file-icon">
            <img src={IMAGES.documentIcon} alt="documentIcon" />
          </div>
          <div>
            <div className="title-text">{text}</div>
            <Badge
              status={"success"}
              text={"Active"}
              className="status-badge"
            />
          </div>
        </div>
      ),
    },
    {
      title: "File Path",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "Last Synced",
      dataIndex: "lastSynced",
      key: "lastSynced",
    },
  ];

  return (
    <div className="project-details-page">
      <div className="project-header">
        <div className="project-back-btn">
          <Button
            onClick={() => navigate(-1)}
            type="primary"
            className="primary-btn"
            shape="circle"
            icon={<ArrowLeftOutlined />}
          />
          Back to Projects
        </div>
        <UserDropdown />
      </div>

      <div className="project-hero">
        <div className="project-hero-img">
          <img src={IMAGES.projectHero} alt="Project Hero" />
        </div>
        <div className="project-hero-content">
          <div className="hero-left">
            <h1>Shell</h1>
            <p>
              Shell is a global energy company operating across exploration,
              production, refining, and low-carbon solutions. With a presence in
              over 70 countries, Shell supports industries with fuels,
              lubricants, and advanced energy technologies.
            </p>
          </div>
          <div className="hero-right">
            <Card className="meta-card">
              <div className="meta-row">
                <div className="meta-column">
                  <div className="meta-label">Industry</div>
                  <div className="service-tags">
                    <Tag>
                      <span>Chemical</span>
                    </Tag>
                  </div>
                </div>
                <div className="meta-column">
                  <div className="meta-label">Service Line</div>
                  <div className="service-tags">
                    <Tag>
                      <span>Capital P...</span>
                    </Tag>
                    <Tag>
                      <span>Biodiv..</span>
                    </Tag>
                    <Tag>
                      <span>Air Qu..</span>
                    </Tag>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="main-content">
        <Row gutter={24}>
          <Col xs={24} md={15} lg={15}>
            <div className="connected-tools">
              <div className="section-head">
                <h3>Connected AI Tools</h3>
                <Button shape="round" type="primary" className="primary-btn">
                  MANAGE
                </Button>
              </div>

              <div className="slider-container">
                <Slider {...settings}>
                  <Card className="tool-card green">
                    <h4>CPD Report Builder</h4>
                    <p>
                      Turn data into impact assessments. Choose your project and
                      let AI handle the heavy lifting
                    </p>
                    <Button
                      shape="round"
                      variant="outlined"
                      className="tool-btn"
                    >
                      START BUILDING
                    </Button>
                  </Card>
                  <Card className="tool-card dark">
                    <h4>Knowledge AI</h4>
                    <p>
                      Ask AI to find anything across knowledge sources or to
                      analyze data
                    </p>
                    <Button
                      shape="round"
                      variant="outlined"
                      className="tool-btn"
                    >
                      ASK A QUESTION
                    </Button>
                  </Card>
                </Slider>
              </div>

              <div className="sync-files">
                <div className="section-head">
                  <h3>Synced Project Files (625)</h3>
                  <Button shape="round" type="primary" className="primary-btn">
                    MANAGE SYNC
                  </Button>
                </div>

                <Table
                  className="files-table"
                  columns={columns}
                  dataSource={filesData}
                  pagination={false}
                />

                <div className="table-footer">
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
              </div>
            </div>
          </Col>

          <Col xs={24} md={9} lg={9}>
            <div className="Collaborators">
              <div className="section-head">
                <h3>Project Collaborators</h3>
                <Button shape="round" type="primary" className="primary-btn">
                  MANAGE
                </Button>
              </div>

              <Card className="collab-card">
                <List
                  itemLayout="horizontal"
                  dataSource={collaborators}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src={null}>{item.name.charAt(0)}</Avatar>
                        }
                        title={
                          <div className="collab-title">
                            {item.name}
                            <span className="collab-status">{item.status}</span>
                          </div>
                        }
                        description={
                          <div className="collab-role">{item.role}</div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectDetails;
