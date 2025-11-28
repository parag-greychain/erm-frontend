import { useState } from "react";
import { Avatar, Button, Collapse, Input, List, Tooltip } from "antd";
import { IMAGES } from "../../shared";
import ChatInputPanel from "../../components/chat/chatInputPanel/ChatInputPanel";
import "./ReportGenerator.scss";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
}

const ReportGenerator: React.FC = () => {
    const [showSteps, setShowSteps] = useState(true);
    const [messages, setMessages] = useState<Message[]>([]);

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

    const tableOfContents = [
        "Introduction",
        "1. Project Sponsor",
        "1.2 Project Context",
        "1.3 Project Purpose",
        "1.4 Regulatory Framework and Purpose of this EIA",
        "2. Project Description",
        "2.1 Drilling and Installation",
        "2.2 Commissioning and Start-up",
        "2.3 Production Operations",
        "2.4 Decommissioning",
        "3. Project Impacts",
        "3.1 Planned Activities",
        "3.1.1 Climate and Climate Change",
        "3.1.2 Marine Geology and Sediments",
        "3.1.3 Marine Water Quality",
        "3.1.4 Protected Areas and Special Status Species",
    ];

    const contentParagraphs = [
        "Predicting the potential impact of local GHG emissions on global (or local) climate change is not feasible due to the multiple factors—beyond that of a single project—that drive global climate change predictions.",
        "Guyana's estimate of annual GHG emissions in 2022 was approximately 14.957 million tonnes of carbon dioxide equivalent. Emissions from Project operations are expected to increase Guyana's annual carbon dioxide equivalent emissions by approximately 4 percent.",
        "There are no applicable regulatory criteria against which these direct GHG emissions can be compared, but these emissions will be reported in accordance with GIIP to aid in managing GHG emissions at a national and international level.",
        "Recovered natural gas that is not used as fuel on the FPSO will be transferred to the Gas to Energy Pipeline and either sent to shore and/or transferred to the Unity FPSO to enhance Liza oil production, which contributes to a significant reduction in potential direct GHG emissions versus that which would result from routine gas flaring.",
    ];

    const collaborators = [
        { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=12" },
        { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=23" },
        { name: "Bob Johnson", avatar: "https://i.pravatar.cc/150?img=43" },
    ];

    const additionalCollaborators = 2;

    const handleSendMessage = (messageText: string) => {
        if (messageText.trim()) {
            const newMessage: Message = {
                id: Date.now().toString(),
                text: messageText,
                sender: "user",
            };
            setMessages((prev) => [...prev, newMessage]);

            // Simulate bot response after a delay
            setTimeout(() => {
                const botResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: "This is a bot response",
                    sender: "bot",
                };
                setMessages((prev) => [...prev, botResponse]);
            }, 1000);
        }
    };

    return (
        <div className="report-generator-container">
            <div className="rg-content">
                <section className="rg-left-panel">
                    <div className="chat-wrapper">
                        {messages.length === 0 ? (
                            // Welcome Screen
                            <div className="chat-welcome">
                                <div className="welcome-header">
                                    <div className="welcome-logo">
                                        <img src={IMAGES.logoIcon} alt="ERM" />
                                    </div>
                                    <h2>CPD Report Builder</h2>
                                    <p>Leverage Project files and Knowledge sources to build sections of the CPD Report</p>
                                </div>
                            </div>
                        ) : (
                            // Chat Content
                            <div className="chat-content">
                                <div className="chat-stepper-wrapper">
                                    <div className="chat-messages">
                                        {messages.map((msg) => (
                                            <div key={msg.id} className={`message ${msg.sender === "user" ? "message-user chat-question" : "message-bot"}`}>
                                                {msg.sender === "user" ? (
                                                    <div className="bubble">
                                                        <div className="avatar">S</div>
                                                        {msg.text}
                                                    </div>
                                                ) : (
                                                    <>
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
                                                                                className={`erm-icon ${panelProps.isActive ? "arrow-up" : "arrow-down"
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
                                                                />
                                                            </Tooltip>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        <ChatInputPanel onSendMessage={handleSendMessage} />
                    </div>
                </section>

                <section className="rg-right-panel">
                    <header className="rg-header">
                        <div>
                            <p className="rg-document-eyebrow">CPD Impact Assessment | Shell</p>
                        </div>
                        <Button type="text" aria-label="Edit">
                            <img src={IMAGES.editIcon} alt="" />
                        </Button>
                        <div className="rg-collaborators">
                            <Avatar.Group size="default">
                                {collaborators.slice(0, 3).map((collab, index) => (
                                    <Avatar key={index} src={collab.avatar} alt={collab.name} />
                                ))}
                                {additionalCollaborators > 0 && (
                                    <div className="rg-collaborator-badge">+{additionalCollaborators}</div>
                                )}
                            </Avatar.Group>

                        </div>
                    </header>

                    <div className="rg-document-body">
                        <div className="rg-toc">
                            <div className="rg-toc-header">
                                <h3>Table of contents</h3>
                                <Button type="text" aria-label="Export">
                                    <img src={IMAGES.toggleUpIcom} alt="" />
                                </Button>
                            </div>
                            <div className="rg-toc-content">
                                <div className="rg-search">
                                    <Input placeholder="Quick find" allowClear size="small" />
                                </div>
                                <List
                                    dataSource={tableOfContents}
                                    renderItem={(title) => <List.Item>{title}</List.Item>}
                                />
                            </div>
                        </div>

                        <div className="rg-article">
                            <div className="rg-document-header">
                                <div>
                                    <h2>3.1.1 Climate and Climate Change</h2>
                                </div>
                                <div className="rg-document-actions">
                                    <Button className="primary-btn" type="primary" shape="round"><img src={IMAGES.aiIconn} alt="" /> AI Edit</Button>
                                    <Button type="text" aria-label="Copy">
                                        <img src={IMAGES.copy2Icon} alt="" />
                                    </Button>
                                    <Button type="text" aria-label="Export">
                                        <img src={IMAGES.exportIcon} alt="" />
                                    </Button>
                                    <Button type="text" aria-label="Duretion">
                                        <img src={IMAGES.duretionIcon} alt="" />
                                    </Button>
                                </div>
                            </div>
                            <div className="rg-document-content">
                                {contentParagraphs.map((text) => (
                                    <p key={text.slice(0, 20)}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReportGenerator;