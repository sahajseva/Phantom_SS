import React, { useContext } from "react";
import { Layout as AntLayout, Menu } from "antd";
import {
    DashboardOutlined,
    LogoutOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { Link, useHistory } from "react-router-dom";

import { AuthContext, IAuthContext } from "@contexts/auth";

export const Layout: React.FC = ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const history = useHistory();
    const { logout } = useContext<IAuthContext>(AuthContext);

    const renderResourceTitle = (title: string) => {
        return title.charAt(0).toUpperCase() + title.slice(1);
    };

    const menuOnClick: MenuClickEventHandler = ({ key }) => {
        console.log(`clicked -> ${key}`);
        if (key === "logout") {
            logout({}).then(() => history.push("/login"));
        }
    };

    return (
        <AntLayout style={{ minHeight: "100vh" }}>
            <AntLayout.Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(collapsed) => setCollapsed(collapsed)}
            >
                <div
                    style={{
                        color: "#FFF",
                        fontSize: 16,
                        textAlign: "center",
                        height: 60,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Brand Name
                </div>
                <Menu
                    onClick={menuOnClick}
                    theme="dark"
                    defaultSelectedKeys={["dashboard"]}
                    mode="inline"
                >
                    <Menu.Item key={`dashboard`} icon={<DashboardOutlined />}>
                        <Link to={`/`}>Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item
                        key={`resource-posts`}
                        icon={<UnorderedListOutlined />}
                    >
                        <Link to={`/resources/posts`}>
                            {renderResourceTitle("posts")}
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key={`resource-users`}
                        icon={<UnorderedListOutlined />}
                    >
                        <Link to={`/resources/users`}>
                            {renderResourceTitle("users")}
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </AntLayout.Sider>
            <AntLayout className="site-layout">
                <AntLayout.Header
                    style={{ padding: 0, backgroundColor: "#FFF" }}
                />
                <AntLayout.Content style={{ margin: "0 16px" }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </AntLayout.Content>
            </AntLayout>
        </AntLayout>
    );
};
