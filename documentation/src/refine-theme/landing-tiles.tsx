import React from "react";
import clsx from "clsx";

import { LandingTileListIcon } from "./icons/landing-tile-list";
import { LandingTileSidesIcon } from "./icons/landing-tile-sides";
import { LandingTileHoneycombIcon } from "./icons/landing-tile-honeycomb";
import { LandingTileWithImage } from "./landing-tile-with-image";
import { LandingFeatherIcon } from "./icons/landing-feather";
import { LandingTile } from "./landing-tile";
import { LandingAutomateIcon } from "./icons/landing-automate";
import { LandingAuthorizationIcon } from "./icons/landing-authorization";
import { LandingIntegrationIcon } from "./icons/landing-integration";
import { LandingReactIcon } from "./icons/landing-react";

export const LandingTiles = () => {
    return (
        <div
            className={clsx(
                "w-full",
                "max-w-screen-landing-content",
                "flex flex-col",
                "gap-12",
                "mx-auto",
                "mb-16",
            )}
        >
            <div
                className={clsx(
                    "bg-landing-text-bg",
                    "bg-clip-text",
                    "text-transparent",
                    "text-[2.5rem]",
                    "leading-[3rem]",
                    "text-center",
                )}
            >
                <span className="font-light">Why </span>
                <span className="font-semibold">Refine</span>
                <span className="font-light">?</span>
            </div>
            <div className={clsx("w-full", "grid", "grid-cols-3", "gap-4")}>
                <LandingTileWithImage image={<LandingTileListIcon />}>
                    <>
                        Eliminates repetitive tasks for{" "}
                        <span className="font-semibold">CRUD</span>,{" "}
                        <span className="font-semibold">networking</span>, and{" "}
                        <span className="font-semibold">state management</span>.
                    </>
                </LandingTileWithImage>
                <LandingTileWithImage image={<LandingTileSidesIcon />}>
                    <>
                        Keeps your code{" "}
                        <span className="font-semibold">clean</span> and{" "}
                        <span className="font-semibold">boilerplate-free</span>.
                    </>
                </LandingTileWithImage>
                <LandingTileWithImage image={<LandingTileHoneycombIcon />}>
                    <>
                        Extended API’s for{" "}
                        <span className="font-semibold">Material UI</span>,{" "}
                        <span className="font-semibold">Ant Design</span>,{" "}
                        <span className="font-semibold">ChakraUI</span>, and{" "}
                        <span className="font-semibold">Mantine</span>.
                    </>
                </LandingTileWithImage>
                <LandingTile icon={<LandingFeatherIcon />}>
                    <span className="font-semibold">Lightweight</span> core
                    library with a{" "}
                    <span className="font-semibold">minimal footprint</span>.
                </LandingTile>
                <LandingTile icon={<LandingAutomateIcon />}>
                    <span className="font-semibold">
                        Automated interface generation
                    </span>{" "}
                    by analyzing your backend data.
                </LandingTile>
                <LandingTile icon={<LandingAuthorizationIcon />}>
                    Components for{" "}
                    <span className="font-semibold">Authentication</span> and{" "}
                    <span className="font-semibold">Access Control</span> flows.
                </LandingTile>
                <LandingTile icon={<LandingIntegrationIcon />}>
                    Seamless integration with{" "}
                    <span className="font-semibold">
                        existing React projects
                    </span>
                    .
                </LandingTile>
                <div className="empty-placeholder" />
                <LandingTile icon={<LandingReactIcon />}>
                    Runs on{" "}
                    <span className="font-semibold">every platform</span> that
                    supports React.
                </LandingTile>
            </div>
        </div>
    );
};
