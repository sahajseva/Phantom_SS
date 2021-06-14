import React from "react";

import { AntdLayout, Menu, Link, useMenu, useTitle } from "@pankod/refine";

export const CustomMenu: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const Title = useTitle();
    const { menuItems, selectedKey } = useMenu();

    return (
        <AntdLayout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
        >
            <Title collapsed={collapsed} />
            <Menu
                theme="dark"
                defaultSelectedKeys={["dashboard"]}
                selectedKeys={[selectedKey]}
                mode="inline"
            >
                {menuItems.map(({ icon, route, label }) => (
                    <Menu.Item key={route} icon={icon}>
                        <Link to={route}>{label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </AntdLayout.Sider>
    );
};
