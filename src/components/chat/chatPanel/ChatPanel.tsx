import {
  ArrowRightOutlined,
  AudioOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Input, Tooltip } from "antd";
import type React from "react";
import { useState } from "react";
import { IMAGES } from "../../../shared";
import KnowledgeSourceModal from "../knowledgeSourceDropdown/KnowledgeDropdown";
import "./ChatPanel.scss";
import FeedbackModal from "../feedbackModal/FeedbackModal";

interface IMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
}
const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showSteps, setShowSteps] = useState(true);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const accordionItems = [
    {
      key: "1",
      label: "National ministry data.",
      children: (
        <div className="accordion-content">
          <p>• Marine Habitat Disturbance</p>
          <p>• Underwater Noise Impact</p>
          <p>• Coastal Erosion & Sediment Shifts</p>
        </div>
      ),
    },
    {
      key: "2",
      label: "Thought process",
      children: (
        <div className="accordion-content">
          <p>
            <strong>Marine Habitat Disturbance</strong>
          </p>
          <p>
            Construction activities may disrupt sensitive benthic habitats
            (corals, seagrass, soft sediments).
          </p>
          <p>Source: Volume 2 – Chapter 7, pp. 112–118</p>
          <p>
            <strong>Underwater Noise Impact on Marine Mammals</strong>
          </p>
          <p>
            Piling and vessel movement increase acoustic pressure, potentially
            affecting migration and feeding patterns of dolphins and whales.
            Source: Marine Mammal Baseline Report, pp. 41–58
          </p>
        </div>
      ),
      className: "deep-search",
    },
    {
      key: "3",
      label: "Additional Notes",
      children: (
        <div className="accordion-content">
          <p>
            <strong>Marine Habitat Disturbance</strong>
          </p>
          <p>
            Construction activities may disrupt sensitive benthic habitats
            (corals, seagrass, soft sediments).
          </p>
          <p>Source: Volume 2 – Chapter 7, pp. 112–118</p>
          <p>
            <strong>Underwater Noise Impact on Marine Mammals</strong>
          </p>
          <p>
            Piling and vessel movement increase acoustic pressure, potentially
            affecting migration and feeding patterns of dolphins and whales.
            Source: Marine Mammal Baseline Report, pp. 41–58
          </p>
        </div>
      ),
    },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length,
        text: inputValue,
        sender: "user" as const,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 1,
          text: "This is a response from the AI assistant based on the selected knowledge sources.",
          sender: "bot" as const,
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="chat-interface">
      {messages.length === 0 ? (
        <div className="chat-welcome">
          <div className="welcome-header">
            <div className="welcome-logo">
              <img src={IMAGES.logoIcon} alt="ERM" />
              <h1>Ask ERM</h1>
            </div>
            <p>Ask anything from the knowledge base</p>
          </div>
        </div>
      ) : (
        <div className="chat-stepper-wrapper">
          <div className="chat-messages">
            <div className="message message-user chat-question">
              <div className="bubble">
                <div className="avatar">S</div>
                What are the key environmental risks associated with
                constructing an offshore platform in Guyana?
              </div>
            </div>
            <div className="message message-bot">
              {/* Steper */}
              <div className="chat-steps">
                <div
                  className="step-header"
                  onClick={() => setShowSteps(!showSteps)}
                >
                  {showSteps ? (
                    <span>
                      <i className="erm-icon arrow-up" />
                    </span>
                  ) : (
                    <span>
                      <i className="erm-icon arrow-down" />
                    </span>
                  )}
                  <span>{showSteps ? "Hide steps" : "Show steps"}</span>
                </div>

                {showSteps && (
                  <div className="steps-accordion">
                    <Collapse
                      items={accordionItems}
                      ghost
                      accordion
                      expandIconPosition="end"
                      expandIcon={(panelProps) => (
                        <i
                          className={`erm-icon ${
                            panelProps.isActive ? "arrow-up" : "arrow-down"
                          }`}
                        />
                      )}
                    />
                  </div>
                )}
              </div>
              <div className="action-btns">
                <Tooltip title="Copy text">
                  <Button
                    type="text"
                    icon={<img src={IMAGES.copyIcon} alt="Copy" />}
                    className="action-btn"
                  />
                </Tooltip>
                <Tooltip title="Give positive feedback">
                  <Button
                    type="text"
                    icon={<img src={IMAGES.likeIcon} alt="like" />}
                    className="action-btn"
                  />
                </Tooltip>
                <Tooltip title="Give negative feedback">
                  <Button
                    type="text"
                    icon={<img src={IMAGES.dislikeIcon} alt="dislike" />}
                    className="action-btn"
                    onClick={() => {
                      setIsFeedbackModalOpen(true);
                    }}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        // <div className="chat-messages">
        //   {messages.map((msg) => (
        //     <div key={msg.id} className={`message message-${msg.sender}`}>
        //       <div className="message-content">{msg.text}</div>
        //     </div>
        //   ))}
        // </div>
      )}

      <div className="chat-input-container footer-chat">
        <div className="chat-input-box">
          <div className="input-wrapper">
            <Input.TextArea
              placeholder="How can I help you today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={(e) => {
                if (e.ctrlKey || e.metaKey) {
                  handleSendMessage();
                }
              }}
              rows={1}
              className="chat-input"
            />
          </div>

          <div className="input-controls">
            <div className="left-controls">
              <Tooltip title="prompt text">
                <Button
                  shape="circle"
                  variant="outlined"
                  icon={<PlusOutlined />}
                  className="control-btn"
                />
              </Tooltip>
              <KnowledgeSourceModal />
              <Tooltip title="Deep Research">
                <Button
                  shape="circle"
                  variant="outlined"
                  icon={<i className="erm-icon deep-research" />}
                  className="control-btn"
                />
              </Tooltip>
            </div>

            <div className="right-controls">
              <Tooltip title="prompt text">
                <Button
                  shape="circle"
                  variant="outlined"
                  icon={<AudioOutlined />}
                  className="control-btn"
                />
              </Tooltip>
              <Button
                type="primary"
                shape="round"
                iconPosition="end"
                onClick={handleSendMessage}
                className="primary-btn ask-btn"
              >
                <span className="ask-text">ASK</span> <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isFeedbackModalOpen && (
        <FeedbackModal
          isOpen={isFeedbackModalOpen}
          handleCancel={() => {
            setIsFeedbackModalOpen(false);
          }}
          handleSubmit={() => {
            setIsFeedbackModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ChatPanel;
