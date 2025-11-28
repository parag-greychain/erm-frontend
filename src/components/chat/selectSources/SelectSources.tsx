import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Drawer, Input, Table, Tabs } from "antd";
import { IMAGES } from "../../../shared";

interface SelectSourcesProps {
  open: boolean;
  onClose: () => void;
}
const SelectSources: React.FC<SelectSourcesProps> = ({ open, onClose }) => {
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
      render: (text: string) => <div className="file-path">{text}</div>,
    },
  ];

  const dataSource = [...Array(15)].map((_, i) => ({
    key: i,
    title: "Document Title",
    type: "doc",
    sharepointFilePath: "ERM › Communities › Marine",
  }));
  return (
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
  );
};

export default SelectSources;
