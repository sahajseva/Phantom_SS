import React, { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import { LayoutProps } from "@pankod/refine-core";

import { Box, GlobalStyles, IconButton } from "@mui/material";

import { Sider as DefaultSider } from "./sider";

export const Layout: React.FC<LayoutProps> = ({
    Sider,
    Header,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);

    const drawerWidth = () => {
        if (collapsed) return 64;
        return 256;
    };

    const SiderToRender = Sider ?? DefaultSider;

    return (
        <Box>
            <GlobalStyles styles={{ body: { margin: "0px" } }} />
            <SiderToRender
                opened={opened}
                setOpened={setOpened}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                drawerWidth={drawerWidth()}
            />
            <Box
                sx={{
                    display: { xs: "block", sm: "none" },
                    position: "fixed",
                    top: "64px",
                    left: "0px",
                    borderRadius: "0 6px 6px 0",
                    bgcolor: "#2a132e",
                }}
            >
                <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => setOpened((prev) => !prev)}
                >
                    <MenuRounded />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    marginLeft: { sm: `${drawerWidth()}px` },
                    transition:
                        "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
            >
                {Header && <Header />}
                <Box
                    component="main"
                    sx={{
                        p: 3,
                        flexGrow: 1,
                        bgcolor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                    }}
                >
                    {children}
                </Box>
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
        </Box>
    );
};
