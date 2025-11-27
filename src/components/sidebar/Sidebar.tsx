import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Select, Menu, Dropdown, type MenuProps } from "antd"
import { IMAGES } from "../../shared";
import './Sidebar.scss'

const Sidebar: React.FC = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false)
    const [agent, setAgent] = useState("cde-agent")
    const [recents] = useState([
        { id: 1, title: "Zero-Code API Integration Platform" },
        { id: 2, title: "Document Builder Agent Icon" },
        { id: 3, title: "Research Image Sources" },
        { id: 4, title: "Enterprise AI Knowledge" },
        { id: 5, title: "Enterprise AI Knowledge" },
        { id: 6, title: "Enterprise AI Knowledge" },
        { id: 7, title: "Enterprise AI Knowledge" },
        { id: 9, title: "Enterprise AI Knowledge" },
        { id: 10, title: "Enterprise AI Knowledge" },
    ])

    useEffect(() => {
        // Listen to the global toggleSidebar event
        const toggleHandler = () => setCollapsed((prev) => !prev)
        window.addEventListener("toggleSidebar", toggleHandler)
        return () => window.removeEventListener("toggleSidebar", toggleHandler)
    }, [])

    const handleNewChat = () => {
        navigate("/")
    }

    const items: MenuProps['items'] = [
        {
            key: 'configuration',
            label: 'Configuration',
            icon: <i className="erm-icon settings"></i>,
            className: 'common-dropdown-item',
        },
        {
            key: 'guides',
            label: 'Guides',
            icon: <i className="erm-icon guides"></i>,
            className: 'common-dropdown-item',
        },
        {
            key: 'logout',
            label: 'Logout',
            icon: <i className="erm-icon logout"></i>,
            className: 'common-dropdown-item',
        },
    ];

    const menuItems = [
        {
            key: "newchat",
            icon: <div className="icon-wrapper"><i className="erm-icon chat"></i></div>,
            label: "New Chat",
            className: 'common-dropdown-item',
            onClick: () => handleNewChat(),
        },
        {
            key: "agents",
            icon: <div className="icon-wrapper"><i className="erm-icon agent"></i></div>,
            label: "Agents",
            className: 'common-dropdown-item',
            onClick: () => navigate("/agents"),
        },
        {
            key: "knowledge",
            icon: <div className="icon-wrapper"><i className="erm-icon source"></i></div>,
            label: "Knowledge Sources",
            className: 'common-dropdown-item',
            onClick: () => navigate("/knowledge-sources"),
        },
    ]

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-header">
                <div className="logo">
                    <button
                        className="toggle-btn"
                        aria-label="Toggle Sidebar"
                        onClick={() => window.dispatchEvent(new CustomEvent("toggleSidebar"))}
                    >
                        <i className="erm-icon toggle"></i>
                    </button>
                    <Link to="/">
                        <img className="logo-icon" src={IMAGES.logo} alt="ERM logo" />
                    </Link>
                </div>
            </div>

            <div className="sidebar-agent-selector">
                <Select
                    value={agent}
                    onChange={setAgent}
                    style={{ width: "100%" }}
                    suffixIcon={<i className="erm-icon arrow-down"></i>}
                    options={[
                        {
                            label: (
                                <div className="select-option">
                                    <i className="erm-icon source"></i>
                                    <span>CDE Agent</span>
                                </div>
                            ), value: "cde-agent"
                        },
                        {
                            label: (
                                <div className="select-option">
                                    <i className="erm-icon source"></i>
                                    <span>Sales Agent</span>
                                </div>
                            ), value: "sales-agent"
                        },
                        {
                            label: (
                                <div className="select-option">
                                    <i className="erm-icon source"></i>
                                    <span>Support Agent</span>
                                </div>
                            ), value: "support-agent"
                        },
                    ]}
                />
            </div>

            <Menu mode="vertical" items={menuItems} theme="dark" className="sidebar-menu" />

            <div className="sidebar-recents">
                <div className="sidebar-recents-wrap">
                    <div className="recents-header">Recents</div>
                    <div className="recents-list">
                        {recents.map((item) => (
                            <Link key={item.id} to={`/chat/${item.id}`} className="recent-item">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sidebar-footer">
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <div className="user-profile">
                            <div className="user-avatar">S</div>
                            <div className="user-info">
                                <div className="user-name">Sarah Johnson</div>
                                <i className="erm-icon arrow-right"></i>
                            </div>
                        </div>
                    </a>
                </Dropdown>
            </div>
        </aside>
    )
}

export default Sidebar;