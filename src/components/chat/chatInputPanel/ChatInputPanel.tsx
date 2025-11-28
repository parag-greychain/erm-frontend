import {
  ArrowRightOutlined,
  AudioOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KnowledgeSourceModal } from "../..";
import { PATHS } from "../../../shared";
import SelectSources from "../selectSources/SelectSources";
import "./ChatInputPanel.scss";

const ChatInputPanel: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isShowSelectedSource, setIsShowSelectedSource] = useState(false);

  const showDrawer = () => {
    setIsShowSelectedSource(!isShowSelectedSource);
  };

  const handleSendMessage = () => {
    navigate(PATHS.chat);
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
