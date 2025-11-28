import React, { useState } from "react";
import ChatInputPanel from "../../components/chat/chatInputPanel/ChatInputPanel";
import Faq from "../../components/home/faq/Faq";
import HowToUsePlateform from "../../components/home/howToUsePlateform/HowToUsePlateform";
import MyProjects from "../../components/home/myProjects/MyProjects";
import { IMAGES } from "../../shared";
import Footer from "./footer/Footer";
import "./Home.scss";
import { Button, Card, Drawer, Input, Table, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { TabPane } = Tabs;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "50%",
      render: (_: string, row: any) => (
        <div className="file-info">
          <div className="doc-icon">
            <img src={IMAGES.documentIcon} alt="documentIcon" />
          </div>
          <div className="file-title">
            <span className="file-title-text">{row.title}</span>
            <span className="status active">
              <span className="status-icon" /> Active
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "SharePoint File Path",
      dataIndex: "sharepointFilePath",
      key: "sharepointFilePath",
      render: (text: string, row: any) => (
        <div className="file-path">{row.sharepointFilePath}</div>
      ),
    },
  ];

  const dataSource = [...Array(15)].map((_, i) => ({
    key: i,
    title: "Document Title",
    type: "doc",
    sharepointFilePath: "ERM › Communities › Marine",
  }));
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="logo-ai">
            <img src={IMAGES.logoWithAi} alt="Logo" />
          </div>
          <div className="container">
            <div className="chat-welcome">
              <div className="welcome-header">
                <div className="welcome-logo">
                  <img src={IMAGES.logoIcon} alt="ERM" />
                  <h1>Ask ERM AI</h1>
                </div>
                <p>Ask anything from the knowledge base</p>
              </div>
            </div>
            <ChatInputPanel />
          </div>
        </div>
      </section>

      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        className="source-drawer"
        width={549}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {/* HEADER */}
        <div className="drawer-header">
          <div className="title">Select Sources</div>

          <div className="header-right">
            <Button className="filter-btn" type="primary">
              <i className="erm-icon filter-icon" />
            </Button>
            <Input
              className="header-search"
              placeholder="Search…"
              prefix={<i className="erm-icon search-icon" />}
              allowClear
            />

            <button className="close-btn" onClick={onClose}>
              <i className="erm-icon drawer-close-icon" />
            </button>
          </div>
        </div>

        {/* TABS */}
        <Tabs defaultActiveKey="2" className="custom-tabs">
          <TabPane tab="Project Files" key="1"></TabPane>

          <TabPane tab="Knowledge Files" key="2">
            <Card className="global-table-card">
              <Table
                className="global-table"
                columns={columns}
                dataSource={dataSource}
                rowSelection={{
                  type: "checkbox",
                }}
                tableLayout="fixed"
                scroll={{ y: "calc(100vh - 240px)" }}
                pagination={false}
              />
            </Card>
          </TabPane>
        </Tabs>

        <div className="drawer-footer">
          <div className="drawer-footer-left">
            <Button type="primary" shape="round" className="transparent-btn">
              <i className="erm-icon drawer-close-icon" />
            </Button>
            <span className="row-selected-count">2 selected</span>
          </div>
          <div className="drawer-footer-right">
            <Button
              type="primary"
              shape="round"
              className="secondary-btn"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="primary" shape="round" className="primary-btn">
              Select <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </Drawer>

      <section className="home-page-body">
        <MyProjects />
        <section className="home-access-section">
          <div className="container">
            <h2>Access AI-powered tools</h2>
            <div className="access-row">
              <div
                className="card-full"
                style={{
                  backgroundImage: `url(${IMAGES.cardOneBg})`,
                }}
              >
                <div className="card-text">
                  <h3>CPD Report Builder</h3>
                  <p>
                    Turn data into impact assessments. Choose your project and
                    let AI handle the heavy lifting
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Start Building
                  </Button>
                </div>
                <div className="card-image">
                  <img src={IMAGES.placeholderCard} alt="placeholderCard" />
                </div>
              </div>
              <div
                className="card-half"
                style={{
                  backgroundImage: `url(${IMAGES.cardTwoBg})`,
                }}
              >
                <div className="card-text">
                  <h3>Ask ERM AI</h3>
                  <p>
                    Ask ERM AI to find anything across knowledge sources or to
                    analyze data
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Ask a question
                  </Button>
                </div>
              </div>
              <div
                className="card-half"
                style={{
                  backgroundImage: `url(${IMAGES.cardTwoBg})`,
                }}
              >
                <div className="card-text">
                  <h3>Access your Knowledge Base</h3>
                  <p>
                    View all the sources synced into the platform for use with
                    AI
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Browse sources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HowToUsePlateform />
        <Faq />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
