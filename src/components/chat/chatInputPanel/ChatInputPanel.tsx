import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import {
  ArrowRightOutlined,
  AudioOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { KnowledgeSourceModal } from "../..";
import "./ChatInputPanel.scss";

interface IMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatInputPanel: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState("");

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
    <div className="chat-input-container footer-chat">
      <div className="chat-input-box">
        <div className="input-wrapper">
          <Input.TextArea
            placeholder={"Type your message..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={(e) => {
              if (e.ctrlKey || e.metaKey) {
                handleSendMessage();
              }
            }}
            rows={2}
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
  );
};

export default ChatInputPanel;
