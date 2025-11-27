import { DownCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button, Collapse, Tag } from "antd";
import { useState } from "react";
import "./ChatStepper.scss";

const ChatSteper: React.FC = () => {
  const [hideSteps, setHideSteps] = useState(false);

  const findings = [
    "The iPhone 17 series was launched in September 2025 in India",
    "For the entire iPhone 17 series in India during the festive season 2025, about 4.5 million units are expected to be sold",
    "The iPhone 17 became the largest-selling Apple smartphone in the first month of launch in India",
    "Sales were 15-20% higher than earlier models in the first 30 days",
  ];

  const mainItems = [
    {
      key: "1",
      label: (
        <div className="step-item-label">
          <div className="step-label-content">
            <GlobalOutlined />
            <span className="step-label-title">
              iPhone 17 Pro sales India 2025
            </span>
          </div>
          <Tag>10 results</Tag>
        </div>
      ),
      children: (
        <div className="step-content">
          <div className="step-description">
            Unearthing iPhone 17 Pro launch details amid sparse sales data.
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="step-item-label">
          <div className="step-label-content">
            <GlobalOutlined />
            <span className="step-label-title">
              iPhone 17 Pro units sold sales figures India
            </span>
          </div>
          <Tag>10 results</Tag>
        </div>
      ),
      children: (
        <div className="step-content">
          <div className="step-description">
            Analyzing market penetration and competitive landscape.
          </div>

          <Collapse
            items={[
              {
                key: "thought",
                label: (
                  <span style={{ fontWeight: 500, color: "#1f1f1f" }}>
                    Thought process
                  </span>
                ),
                children: (
                  <div className="thought-process">
                    <div className="thought-header">
                      Great! Now I have much better information about iPhone 17
                      Pro sales specifically in India. Let me summarize what I
                      found:
                    </div>
                    <ol className="findings-list">
                      {findings.map((finding, idx) => (
                        <li key={idx}>{finding}</li>
                      ))}
                    </ol>
                  </div>
                ),
              },
            ]}
            defaultActiveKey={["thought"]}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="stepper-container">
      <div className="stepper-header">
        <div className="stepper-title">
          🔍 What is the sales of iPhone 17 Pro this year in India?
        </div>

        <Button
          className="hide-steps-btn"
          onClick={() => setHideSteps(!hideSteps)}
        >
          <DownCircleOutlined />
          {hideSteps ? "Show steps" : "Hide steps"}
        </Button>
      </div>

      {!hideSteps && (
        <div className="steps-section">
          <Collapse items={mainItems} accordion />
        </div>
      )}

      {hideSteps && (
        <div className="empty-state">
          <div className="empty-state-text">
            Steps are hidden. Click "Show steps" to view the detailed research
            process.
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSteper;
