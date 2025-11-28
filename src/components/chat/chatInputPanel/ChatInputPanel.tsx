import {
  ArrowRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KnowledgeSourceModal } from "../..";
import { PATHS } from "../../../shared";
import SelectSources from "../selectSources/SelectSources";
import "./ChatInputPanel.scss";

interface ChatInputPanelProps {
  onSendMessage?: (message: string) => void;
}

const ChatInputPanel: React.FC<ChatInputPanelProps> = ({ onSendMessage }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isShowSelectedSource, setIsShowSelectedSource] = useState(false);

  const showDrawer = () => {
    setIsShowSelectedSource(!isShowSelectedSource);
  };

  const handleSendMessage = () => {
    if (onSendMessage) {
      onSendMessage(inputValue);
      setInputValue("");
    } else {
      navigate(PATHS.chat);
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
              if (onSendMessage && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              } else if (e.ctrlKey || e.metaKey) {
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
                onClick={showDrawer}
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
                shape="round"
                variant="outlined"
                icon={<i className="erm-icon my-project" />}
                className="control-btn">
                Shell
              </Button>
            </Tooltip>
            <Button
              type="primary"
              shape="circle"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              onClick={handleSendMessage}
              className="primary-btn ask-btn"
            >
            </Button>
          </div>
        </div>
      </div>
      {isShowSelectedSource && (
        <SelectSources
          open={isShowSelectedSource}
          onClose={() => setIsShowSelectedSource(false)}
        />
      )}
    </div>
  );
};

export default ChatInputPanel;
