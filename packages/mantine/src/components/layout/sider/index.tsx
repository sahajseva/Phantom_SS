import React, { useState } from "react";
import {
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useLogout,
    useMenu,
    useRefineContext,
    useRouterContext,
    useTitle,
    useTranslate,
} from "@pankod/refine-core";
import {
    ActionIcon,
    Box,
    Drawer,
    Navbar,
    NavLink,
    NavLinkStylesNames,
    NavLinkStylesParams,
    ScrollArea,
    MediaQuery,
    Button,
    Tooltip,
    TooltipProps,
    Styles,
} from "@mantine/core";
import {
    BoxMultiple,
    LayoutSidebarLeftExpand,
    ChevronRight,
    ChevronLeft,
    Logout,
    Home,
} from "tabler-icons-react";
import { RefineLayoutSiderProps } from "@pankod/refine-ui-types";

import { Title as DefaultTitle } from "../title";

const defaultNavIcon = <BoxMultiple color="white" size={16} />;

export const Sider: React.FC<RefineLayoutSiderProps> = ({ render }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);

    const { Link } = useRouterContext();
    const { defaultOpenKeys, menuItems, selectedKey } = useMenu();
    const Title = useTitle();
    const isExistAuthentication = useIsExistAuthentication();
    const t = useTranslate();
    const { hasDashboard } = useRefineContext();
    const { mutate: mutateLogout } = useLogout();

    const RenderToTitle = Title ?? DefaultTitle;

    const drawerWidth = () => {
        if (collapsed) return 80;
        return 200;
    };

    const commonNavLinkStyles: Styles<NavLinkStylesNames, NavLinkStylesParams> =
        {
            root: {
                display: "flex",
                color: "white",
                fontWeight: 500,
                "&:hover": {
                    backgroundColor: "unset",
                },
                "&[data-active]": {
                    backgroundColor: "#ffffff1a",
                    color: "white",
                    fontWeight: 700,
                    "&:hover": {
                        backgroundColor: "#ffffff1a",
                    },
                },
                justifyContent: collapsed && !opened ? "center" : "flex-start",
            },
            icon: {
                marginRight: collapsed && !opened ? 0 : 12,
            },
            body: {
                display: collapsed && !opened ? "none" : "flex",
            },
        };

    const commonTooltipProps: Partial<TooltipProps> = {
        disabled: !collapsed || opened,
        position: "right",
        withinPortal: true,
        withArrow: true,
        arrowSize: 8,
        arrowOffset: 12,
        offset: 4,
    };

    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
        return tree.map((item) => {
            const { icon, label, route, name, children } = item;

            const isSelected = route === selectedKey;
            const isParent = children.length > 0;

            const additionalLinkProps = isParent
                ? {}
                : { component: Link, to: route };

            return (
                <CanAccess
                    key={route}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{
                        resource: item,
                    }}
                >
                    <Tooltip label={label} {...commonTooltipProps}>
                        <NavLink
                            key={route}
                            label={collapsed && !opened ? null : label}
                            icon={icon ?? defaultNavIcon}
                            active={isSelected}
                            childrenOffset={collapsed && !opened ? 0 : 12}
                            defaultOpened={defaultOpenKeys.includes(
                                route || "",
                            )}
                            styles={commonNavLinkStyles}
                            {...additionalLinkProps}
                        >
                            {isParent && renderTreeView(children, selectedKey)}
                        </NavLink>
                    </Tooltip>
                </CanAccess>
            );
        });
    };

    const items = renderTreeView(menuItems, selectedKey);

    const dashboard = hasDashboard ? (
        <CanAccess resource="dashboard" action="list">
            <Tooltip
                label={t("dashboard.title", "Dashboard")}
                {...commonTooltipProps}
            >
                <NavLink
                    key="dashboard"
                    label={
                        collapsed && !opened
                            ? null
                            : t("dashboard.title", "Dashboard")
                    }
                    icon={<Home size={16} />}
                    component={Link}
                    to="/"
                    active={selectedKey === "/"}
                    styles={commonNavLinkStyles}
                />
            </Tooltip>
        </CanAccess>
    ) : null;

    const logout = isExistAuthentication && (
        <Tooltip label={t("buttons.logout", "Logout")} {...commonTooltipProps}>
            <NavLink
                key="logout"
                label={
                    collapsed && !opened ? null : t("buttons.logout", "Logout")
                }
                icon={<Logout />}
                onClick={() => mutateLogout()}
                styles={commonNavLinkStyles}
            />
        </Tooltip>
    );

    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                logout,
                items,
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

    return (
        <>
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Box sx={{ position: "fixed", top: 64, left: 0, zIndex: 1199 }}>
                    <ActionIcon
                        color="white"
                        size={36}
                        sx={{
                            borderRadius: "0 6px 6px 0",
                            backgroundColor: "#2A132E",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#2A132E",
                            },
                        }}
                        onClick={() => setOpened((prev) => !prev)}
                    >
                        <LayoutSidebarLeftExpand />
                    </ActionIcon>
                </Box>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    size={200}
                    zIndex={1200}
                    withCloseButton={false}
                    styles={{
                        drawer: {
                            overflow: "hidden",
                            backgroundColor: "#2A132E",
                        },
                    }}
                >
                    <Navbar.Section px="xs">
                        <RenderToTitle collapsed={false} />
                    </Navbar.Section>
                    <Navbar.Section
                        grow
                        component={ScrollArea}
                        mx="-xs"
                        px="xs"
                    >
                        {renderSider()}
                    </Navbar.Section>
                </Drawer>
            </MediaQuery>

            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <Box
                    sx={{
                        width: drawerWidth(),
                        transition: "width 1000ms ease, min-width 1000ms ease",
                    }}
                />
            </MediaQuery>

            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <Navbar
                    width={{ base: drawerWidth() }}
                    sx={{
                        overflow: "hidden",
                        transition: "width 1000ms ease, min-width 1000ms ease",
                        backgroundColor: "#2A132E",
                        position: "fixed",
                    }}
                >
                    <Navbar.Section px="xs">
                        <RenderToTitle collapsed={collapsed} />
                    </Navbar.Section>
                    <Navbar.Section
                        grow
                        mt="sm"
                        component={ScrollArea}
                        mx="-xs"
                        px="xs"
                    >
                        {renderSider()}
                    </Navbar.Section>
                    <Navbar.Section>
                        <Button
                            sx={{
                                background: "rgba(0,0,0,.5)",
                                borderRadius: 0,
                                borderTop: "1px solid #ffffff1a",
                            }}
                            size="md"
                            variant="gradient"
                            fullWidth
                            onClick={() => setCollapsed((prev) => !prev)}
                        >
                            {collapsed ? <ChevronRight /> : <ChevronLeft />}
                        </Button>
                    </Navbar.Section>
                </Navbar>
            </MediaQuery>
        </>
    );
};
