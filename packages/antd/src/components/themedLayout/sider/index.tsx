import React, { useState } from "react";
import { Layout, Menu, Grid, Drawer, Button, theme } from "antd";
import {
    DashboardOutlined,
    LogoutOutlined,
    UnorderedListOutlined,
    BarsOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import {
    useTranslate,
    useLogout,
    useTitle,
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useRouterContext,
    useMenu,
    useRefineContext,
    useLink,
    useRouterType,
    useActiveAuthProvider,
    pickNotDeprecated,
} from "@refinedev/core";

import { drawerButtonStyles } from "./styles";
import { RefineThemedLayoutSiderProps } from "../types";
import { ThemedTitle } from "@components";

const { SubMenu } = Menu;
const { useToken } = theme;

export const ThemedSider: React.FC<RefineThemedLayoutSiderProps> = ({
    Title: TitleFromProps,
    render,
    meta,
}) => {
    const { token } = useToken();

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const isExistAuthentication = useIsExistAuthentication();
    const routerType = useRouterType();
    const NewLink = useLink();
    const { Link: LegacyLink } = useRouterContext();
    const Link = routerType === "legacy" ? LegacyLink : NewLink;
    const TitleFromContext = useTitle();
    const translate = useTranslate();
    const { menuItems, selectedKey, defaultOpenKeys } = useMenu({ meta });
    const breakpoint = Grid.useBreakpoint();
    const { hasDashboard } = useRefineContext();
    const authProvider = useActiveAuthProvider();
    const { mutate: mutateLogout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    const RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitle;

    const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) => {
        return tree.map((item: ITreeMenu) => {
            const {
                icon,
                label,
                route,
                key,
                name,
                children,
                parentName,
                meta,
                options,
            } = item;

            if (children.length > 0) {
                return (
                    <CanAccess
                        key={item.key}
                        resource={name.toLowerCase()}
                        action="list"
                        params={{
                            resource: item,
                        }}
                    >
                        <SubMenu
                            key={item.key}
                            icon={icon ?? <UnorderedListOutlined />}
                            title={label}
                        >
                            {renderTreeView(children, selectedKey)}
                        </SubMenu>
                    </CanAccess>
                );
            }
            const isSelected = key === selectedKey;
            const isRoute = !(
                pickNotDeprecated(meta?.parent, options?.parent, parentName) !==
                    undefined && children.length === 0
            );

            return (
                <CanAccess
                    key={item.key}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{
                        resource: item,
                    }}
                >
                    <Menu.Item
                        key={item.key}
                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}
                    >
                        <Link to={route ?? ""}>{label}</Link>
                        {!collapsed && isSelected && (
                            <div className="ant-menu-tree-arrow" />
                        )}
                    </Menu.Item>
                </CanAccess>
            );
        });
    };

    const logout = isExistAuthentication && (
        <Menu.Item
            key="logout"
            onClick={() => mutateLogout()}
            icon={<LogoutOutlined />}
        >
            {translate("buttons.logout", "Logout")}
        </Menu.Item>
    );

    const dashboard = hasDashboard ? (
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/">{translate("dashboard.title", "Dashboard")}</Link>
            {!collapsed && selectedKey === "/" && (
                <div className="ant-menu-tree-arrow" />
            )}
        </Menu.Item>
    ) : null;

    const items = renderTreeView(menuItems, selectedKey);

    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                items,
                logout,
                collapsed,
            });
        }
        return (
            <>
                {dashboard}
                {items}
                {logout}
            </>
        );
    };

    const renderMenu = () => {
        return (
            <>
                <Menu
                    selectedKeys={selectedKey ? [selectedKey] : []}
                    defaultOpenKeys={defaultOpenKeys}
                    mode="inline"
                    style={{
                        marginTop: "8px",
                        border: "none",
                    }}
                    onClick={() => {
                        setDrawerOpen(false);
                        if (!breakpoint.lg) {
                            setCollapsed(true);
                        }
                    }}
                >
                    {renderSider()}
                </Menu>
            </>
        );
    };

    const renderDrawerSider = () => {
        return (
            <>
                <Drawer
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    placement="left"
                    closable={false}
                    width={200}
                    bodyStyle={{
                        padding: 0,
                    }}
                    maskClosable={true}
                >
                    <Layout>
                        <Layout.Sider
                            style={{
                                height: "100vh",
                                overflow: "hidden",
                                backgroundColor: token.colorBgContainer,
                                borderRight: `1px solid ${token.colorBgElevated}`,
                            }}
                        >
                            <div
                                style={{
                                    width: "200px",
                                    padding: "0 16px",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    height: "64px",
                                    backgroundColor: token.colorBgElevated,
                                }}
                            >
                                <RenderToTitle collapsed={false} />
                            </div>
                            {renderMenu()}
                        </Layout.Sider>
                    </Layout>
                </Drawer>
                <Button
                    style={drawerButtonStyles}
                    size="large"
                    onClick={() => setDrawerOpen(true)}
                    icon={<BarsOutlined />}
                ></Button>
            </>
        );
    };

    if (isMobile) {
        return renderDrawerSider();
    }

    return (
        <Layout.Sider
            style={{
                backgroundColor: token.colorBgContainer,
                borderRight: `1px solid ${token.colorBgElevated}`,
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => setCollapsed(collapsed)}
            collapsedWidth={80}
            breakpoint="lg"
            trigger={
                <Button
                    type="text"
                    style={{
                        borderRadius: 0,
                        height: "100%",
                        width: "100%",
                        backgroundColor: token.colorBgElevated,
                    }}
                >
                    {collapsed ? (
                        <RightOutlined
                            style={{
                                color: token.colorPrimary,
                            }}
                        />
                    ) : (
                        <LeftOutlined
                            style={{
                                color: token.colorPrimary,
                            }}
                        />
                    )}
                </Button>
            }
        >
            <div
                style={{
                    width: collapsed ? "80px" : "200px",
                    padding: collapsed ? "0" : "0 16px",
                    display: "flex",
                    justifyContent: collapsed ? "center" : "flex-start",
                    alignItems: "center",
                    height: "64px",
                    backgroundColor: token.colorBgElevated,
                }}
            >
                <RenderToTitle collapsed={collapsed} />
            </div>
            {renderMenu()}
        </Layout.Sider>
    );
};
