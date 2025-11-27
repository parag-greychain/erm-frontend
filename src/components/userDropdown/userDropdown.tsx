import { Avatar, Dropdown, type MenuProps } from "antd";

const UserDropdown = () => {

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

    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <Avatar className="userAvatar" style={{ cursor: 'pointer' }}>S</Avatar>
        </Dropdown>
    )
}

export default UserDropdown;