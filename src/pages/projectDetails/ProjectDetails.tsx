import React from "react";
import { Avatar, Button, Card, Col, List, Row, Table, Tag, Checkbox, type CheckboxChangeEvent, Badge } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./ProjectDetails.scss";
import UserDropdown from "../../components/userDropdown/userDropdown";
import { IMAGES } from "../../shared";
import CustomPagination from "../../components/pagination/CustomPagination";
import Slider from "react-slick";

const ProjectDetails: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const tools = [
        {
            id: 1,
            title: "CPD Report Builder",
            description: "Turn data into impact assessments. Choose your project and let AI handle the heavy lifting",
            buttonText: "START BUILDING",
            bgImage: IMAGES.reportCardBg,
            className: "green",
        },
        {
            id: 2,
            title: "Knowledge AI",
            description: "Ask AI to find anything across knowledge sources or to analyze data",
            buttonText: "ASK A QUESTION",
            bgImage: IMAGES.knowledgeCardBg,
            className: "dark",
        },
    ];

    const collaborators = [
        { name: "Oliver Bennett", avatar: "https://i.pravatar.cc/150?img=12", role: "Technical Partner", status: "Left" },
        { name: "Sophie Harrington", avatar: "https://i.pravatar.cc/150?img=23", role: "Partner" },
        { name: "James Whitmore", avatar: "https://i.pravatar.cc/150?img=43", role: "Project Coordinator" },
        { name: "Ethan Rowley", avatar: "https://i.pravatar.cc/150?img=12", role: "Project Coordinator" },
        { name: "Charlotte Hughes", avatar: "null", role: "Project Coordinator" },
    ];

    const filesData = new Array(6).fill(null).map((_, i) => ({
        key: i,
        title: "Document Title",
        path: "ERM>Communities>Marine",
        lastSynced: i === 0 ? "10 hours ago" : "4:05 PM 24 Nov 2025",
    }));

    const allSelected = filesData.length > 0 && selectedRowKeys.length === filesData.length;

    const toggleSelectAll = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setSelectedRowKeys(filesData.map((f) => f.key));
        } else {
            setSelectedRowKeys([]);
        }
    };

    const columns = [
        {
            title: <Checkbox className="custom-check" checked={allSelected} onChange={toggleSelectAll} />,
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
                            setSelectedRowKeys((prev) => prev.filter((k) => k !== record.key));
                        }
                    }}
                />
            ),
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (text: any, record: any) => {
                const fileName = String(text || "");
                const lower = fileName.toLowerCase();

                const getIcon = () => {
                    // prioritize explicit type if provided on record
                    if (record.type) {
                        const t = String(record.type).toLowerCase();
                        if (t === "folder") return IMAGES.documentIcon;
                        if (t === "pdf") return IMAGES.pptIcon;
                        if (t === "doc" || t === "docx") return IMAGES.documentIcon;
                        if (t === "xls" || t === "xlsx") return IMAGES.documentIcon;
                    }

                    // infer from filename extension
                    if (lower.endsWith(".pdf")) return IMAGES.documentIcon;
                    if (lower.endsWith(".doc") || lower.endsWith(".docx")) return IMAGES.documentIcon;
                    if (lower.endsWith(".xls") || lower.endsWith(".xlsx")) return IMAGES.documentIcon;

                    // if path looks like a folder (contains separators), treat as folder icon
                    if (record.path && String(record.path).includes(">")) return IMAGES.documentIcon;

                    // fallback
                    return IMAGES.documentIcon;
                };

                const icon = getIcon();

                return (
                    <div className="file-title">
                        <div className="file-icon">
                            <img src={icon} alt="file-icon" />
                        </div>
                        <div>
                            <div className="title-text">{fileName}</div>
                            <Badge
                                status={"success"}
                                text={"Active"}
                                className="status-badge"
                            />
                        </div>
                    </div>
                );
            },
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
                    <Button type="primary" className="primary-btn" shape="circle" icon={<ArrowLeftOutlined />} />
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
                        <p>Shell is a global energy company operating across exploration, production, refining, and low-carbon solutions.
                            With a presence in over 70 countries, Shell supports industries with fuels, lubricants, and advanced energy technologies.</p>
                    </div>
                    <div className="hero-right">
                        <Card className="meta-card">
                            <div className="meta-row">
                                <div className="meta-column">
                                    <div className="meta-label">Industry</div>
                                    <div className="service-tags">
                                        <Tag><span>Chemical</span></Tag>
                                    </div>
                                </div>
                                <div className="meta-column">
                                    <div className="meta-label">Service Line</div>
                                    <div className="service-tags">
                                        <Tag><span>Capital P...</span></Tag>
                                        <Tag><span>Biodiv..</span></Tag>
                                        <Tag><span>Air Qu..</span></Tag>
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
                                <Button shape="round" type="primary" className="primary-btn">MANAGE</Button>
                            </div>

                            <div className="tool-list">
                                <Slider {...settings}>
                                    {tools.map((tool) => (
                                        <Card key={tool.id} className={`tool-card ${tool.className}`}>
                                            <img className="card-bg-img" src={tool.bgImage} alt={tool.title} />
                                            <div className="tool-content">
                                                <h4>{tool.title}</h4>
                                                <p>{tool.description}</p>
                                                <Button shape="round" type="default" ghost className="tool-btn">
                                                    {tool.buttonText}
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                </Slider>
                            </div>

                            <div className="sync-files">
                                <div className="section-head">
                                    <h3>Synced Project Files (625)</h3>
                                    <Button shape="round" type="primary" className="primary-btn">MANAGE SYNC</Button>
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
                                <Button shape="round" type="primary" className="primary-btn">MANAGE</Button>
                            </div>

                            <Card className="collab-card">
                                <List
                                    itemLayout="horizontal"
                                    dataSource={collaborators}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar}>{item.name.charAt(0)}</Avatar>}
                                                title={<div className="collab-title">{item.name}
                                                    <span className="collab-status">{item.status}</span>
                                                </div>}
                                                description={<div className="collab-role">{item.role}</div>}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default ProjectDetails;
