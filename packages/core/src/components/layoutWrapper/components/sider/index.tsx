import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import {
    useTranslate,
    useMenu,
    useLogout,
    useTitle,
    useNavigation,
} from "@hooks";
import { AuthContext } from "@contexts/auth";
import { IAuthContext } from "../../../../interfaces";

export const Sider: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { isProvided } = useContext<IAuthContext>(AuthContext);
    const { mutate: logout } = useLogout();
    const Title = useTitle();
    const translate = useTranslate();
    const { menuItems, selectedKey } = useMenu();
    const { push } = useNavigation();

    return (
        <Layout.Sider
            collapsible
            breakpoint="md"
            collapsed={collapsed}
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
        >
            <Title collapsed={collapsed} />
            <Menu
                theme="dark"
                defaultSelectedKeys={["dashboard"]}
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={({ key }) => {
                    if (key === "logout") {
                        logout();
                        return;
                    }

                    push(key as string);
                }}
            >
                {menuItems.map(({ icon, route, label }) => (
                    <Menu.Item key={route} icon={icon}>
                        {label}
                    </Menu.Item>
                ))}

                {isProvided && (
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        {translate("buttons.logout", "Logout")}
                    </Menu.Item>
                )}
            </Menu>
        </Layout.Sider>
    );
};
