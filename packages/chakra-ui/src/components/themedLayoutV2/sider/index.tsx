import React from "react";
import {
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useLink,
    useLogout,
    useMenu,
    useActiveAuthProvider,
    useRefineContext,
    useRouterContext,
    useRouterType,
    useTitle,
    useTranslate,
    useWarnAboutChange,
} from "@refinedev/core";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Tooltip,
    TooltipProps,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { IconList, IconDashboard, IconPower } from "@tabler/icons";

import { ThemedTitleV2 as DefaultTitle } from "../title";
import { RefineThemedLayoutV2SiderProps } from "../types";
import { useSiderVisible } from "@hooks";

export const ThemedSiderV2: React.FC<RefineThemedLayoutV2SiderProps> = ({
    Title: TitleFromProps,
    render,
    meta,
}) => {
    const { siderVisible, setSiderVisible, drawerSiderVisible } =
        useSiderVisible();

    const routerType = useRouterType();
    const NewLink = useLink();
    const { Link: LegacyLink } = useRouterContext();
    const Link = routerType === "legacy" ? LegacyLink : NewLink;
    const { menuItems, selectedKey, defaultOpenKeys } = useMenu({ meta });
    const TitleFromContext = useTitle();
    const isExistAuthentication = useIsExistAuthentication();
    const t = useTranslate();
    const { hasDashboard } = useRefineContext();
    const authProvider = useActiveAuthProvider();
    const { warnWhen, setWarnWhen } = useWarnAboutChange();
    const { mutate: mutateLogout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const RenderToTitle = TitleFromProps ?? TitleFromContext ?? DefaultTitle;

    const siderWidth = () => {
        if (!drawerSiderVisible) return "56px";
        return "200px";
    };

    const commonTooltipProps: Omit<TooltipProps, "children"> = {
        placement: "right",
        hasArrow: true,
        isDisabled: drawerSiderVisible || siderVisible,
    };

    const renderTreeView = (tree: ITreeMenu[]) => {
        return tree.map((item) => {
            const { label, route, name, icon, children } = item;

            const isSelected = item.key === selectedKey;
            const isParent = children.length > 0;

            const linkProps = !isParent
                ? {
                      as: Link,
                      to: route,
                  }
                : undefined;

            return (
                <CanAccess
                    key={item.key}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{
                        resource: item,
                    }}
                >
                    <Accordion
                        defaultIndex={
                            defaultOpenKeys.includes(item.key || "") ? 0 : -1
                        }
                        width="full"
                        mb={2}
                        allowToggle
                    >
                        <AccordionItem border="none">
                            <Tooltip label={label} {...commonTooltipProps}>
                                <AccordionButton
                                    px={0}
                                    py={0}
                                    as="div"
                                    width="full"
                                    _hover={{
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <Button
                                        colorScheme={
                                            isSelected ? "brand" : "gray"
                                        }
                                        borderRadius={0}
                                        pl={
                                            !drawerSiderVisible && !siderVisible
                                                ? 6
                                                : 5
                                        }
                                        width="full"
                                        variant="ghost"
                                        fontWeight="normal"
                                        leftIcon={
                                            icon ??
                                            ((
                                                <>
                                                    <IconList size={16} />
                                                </>
                                            ) as any)
                                        }
                                        rightIcon={
                                            isParent ? (
                                                <AccordionIcon color="brand.100" />
                                            ) : undefined
                                        }
                                        _active={{
                                            _before: {
                                                content: "''",
                                                bgColor: useColorModeValue(
                                                    "brand.200",
                                                    "brand.200",
                                                ),
                                                opacity: 0.05,
                                                position: "absolute",
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                width: "100%",
                                                height: "100%",
                                            },
                                            borderRight: "4px",
                                            borderRightColor: "brand.200",
                                        }}
                                        isActive={isSelected}
                                        {...linkProps}
                                    >
                                        {(siderVisible ||
                                            drawerSiderVisible) && (
                                            <Box flexGrow={1} textAlign="left">
                                                {label}
                                            </Box>
                                        )}
                                    </Button>
                                </AccordionButton>
                            </Tooltip>

                            {isParent && (
                                <AccordionPanel
                                    p={0}
                                    pl={
                                        !drawerSiderVisible && !siderVisible
                                            ? 0
                                            : 4
                                    }
                                >
                                    <Accordion width="full" allowToggle>
                                        {renderTreeView(children)}
                                    </Accordion>
                                </AccordionPanel>
                            )}
                        </AccordionItem>
                    </Accordion>
                </CanAccess>
            );
        });
    };

    const items = renderTreeView(menuItems);

    const dashboard = hasDashboard ? (
        <CanAccess resource="dashboard" action="list">
            <Tooltip
                label={t("dashboard.title", "Dashboard")}
                {...commonTooltipProps}
            >
                <Button
                    width="full"
                    justifyContent={
                        !siderVisible && !drawerSiderVisible
                            ? "center"
                            : "flex-start"
                    }
                    fontWeight="normal"
                    leftIcon={<IconDashboard size={16} />}
                    variant="ghost"
                    isActive={selectedKey === "/"}
                    _active={{
                        color: "brand.200",
                        backgroundColor: "brand.900",
                    }}
                    as={Link}
                    to="/"
                >
                    {(siderVisible || drawerSiderVisible) &&
                        t("dashboard.title", "Dashboard")}
                </Button>
            </Tooltip>
        </CanAccess>
    ) : null;

    const handleLogout = () => {
        if (warnWhen) {
            const confirm = window.confirm(
                t(
                    "warnWhenUnsavedChanges",
                    "Are you sure you want to leave? You have unsaved changes.",
                ),
            );

            if (confirm) {
                setWarnWhen(false);
                mutateLogout();
            }
        } else {
            mutateLogout();
        }
    };

    const logout = isExistAuthentication && (
        <Tooltip label={t("buttons.logout", "Logout")} {...commonTooltipProps}>
            <Box p={0}>
                <Button
                    borderRadius={0}
                    width="full"
                    justifyContent={
                        !siderVisible && !drawerSiderVisible
                            ? "center"
                            : "flex-start"
                    }
                    pl={!siderVisible && !drawerSiderVisible ? 6 : 5}
                    fontWeight="normal"
                    leftIcon={<IconPower size={16} />}
                    variant="ghost"
                    _active={{
                        color: "brand.200",
                        backgroundColor: "brand.900",
                    }}
                    onClick={handleLogout}
                >
                    {(siderVisible || drawerSiderVisible) &&
                        t("buttons.logout", "Logout")}
                </Button>
            </Box>
        </Tooltip>
    );

    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                logout,
                items,
                collapsed: false,
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
            <Drawer
                placement="left"
                isOpen={siderVisible}
                onClose={() => setSiderVisible?.(!siderVisible)}
            >
                <DrawerOverlay />
                <DrawerContent w="200px" maxW="200px">
                    <Box
                        display="flex"
                        flexShrink={0}
                        pl={4}
                        alignItems="center"
                        height="64px"
                        fontSize="14px"
                        bg={useColorModeValue(
                            "refine.sider.header.light",
                            "refine.sider.header.dark",
                        )}
                        borderBottom="1px"
                        borderBottomColor={useColorModeValue(
                            "gray.200",
                            "gray.700",
                        )}
                    >
                        <RenderToTitle collapsed={false} />
                    </Box>
                    <VStack
                        alignItems="start"
                        flexGrow={1}
                        bg={useColorModeValue(
                            "refine.sider.bg.light",
                            "refine.sider.bg.dark",
                        )}
                        overflow="auto"
                    >
                        <Box width="full">{renderSider()}</Box>
                    </VStack>
                </DrawerContent>
            </Drawer>

            <Box
                display={["none", "none", "flex"]}
                width={siderWidth()}
                transition="width 200ms ease, min-width 200ms ease"
                flexShrink={0}
            />
            <Box
                position="fixed"
                width={siderWidth()}
                top={0}
                h="100vh"
                display={["none", "none", "flex"]}
                flexDirection="column"
                transition="width 200ms ease, min-width 200ms ease"
            >
                <Box
                    display="flex"
                    flexShrink={0}
                    pl={!drawerSiderVisible ? 0 : 4}
                    justifyContent={
                        !drawerSiderVisible ? "center" : "flex-start"
                    }
                    alignItems="center"
                    fontSize="14px"
                    height="64px"
                    borderRight="1px"
                    borderRightColor={useColorModeValue("gray.200", "gray.700")}
                    borderBottom="1px"
                    borderBottomColor={useColorModeValue(
                        "gray.200",
                        "gray.700",
                    )}
                    bg={useColorModeValue(
                        "refine.sider.header.light",
                        "refine.sider.header.dark",
                    )}
                >
                    <RenderToTitle collapsed={!drawerSiderVisible} />
                </Box>
                <VStack
                    alignItems="start"
                    paddingY={2}
                    height="100%"
                    flexGrow={1}
                    borderRight="1px"
                    borderRightColor={useColorModeValue("gray.200", "gray.700")}
                    bg={useColorModeValue(
                        "refine.sider.bg.light",
                        "refine.sider.bg.dark",
                    )}
                >
                    <Box width="full" overflow="auto">
                        {renderSider()}
                    </Box>
                </VStack>
            </Box>
        </>
    );
};
