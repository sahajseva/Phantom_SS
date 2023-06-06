import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";
import { RefineLogoIcon } from "./icons/refine-logo";

import { DocVersionDropdown } from "./doc-version-dropdown";
import { CommonThemeToggle } from "./common-theme-toggle";
import { CommonHomeButton } from "./common-home-button";
import { CommonGithubStarButton } from "./common-github-star-button";

export const HEADER_HEIGHT = 67;

export const DocHeader = () => {
    return (
        <div
            className={clsx(
                "h-16",
                "z-10",
                "sticky",
                "top-0",
                "dark:bg-gray-800 bg-gray-50",
                "border-b dark:border-gray-700 border-gray-200",
                "py-3 px-6",
            )}
        >
            <div
                className={clsx(
                    "max-w-[1644px]",
                    "flex justify-between items-center",
                    "mx-auto",
                )}
            >
                <div className={clsx("flex", "items-center")}>
                    <Link
                        to="/docs"
                        className={clsx(
                            "flex",
                            "justify-center",
                            "gap-3",
                            "hover:no-underline",
                        )}
                    >
                        <RefineLogoIcon className="dark:text-gray-0 text-gray-900" />
                        <span
                            className={clsx(
                                "text-base leading-none font-normal",
                                "mt-1.5",
                                "dark:text-gray-0 text-gray-500",
                            )}
                        >
                            Documentation
                        </span>
                    </Link>
                </div>
                <div className={clsx("flex items-center justify-between")}>
                    <div
                        className={clsx(
                            "max-w-screen-content",

                            "flex",
                            "items-center justify-between",
                        )}
                    >
                        <SearchBar />
                    </div>
                </div>

                <div className={clsx("flex justify-end", "items-center")}>
                    <DocVersionDropdown />
                    <div
                        className={clsx(
                            "h-6",
                            "w-px",
                            "mx-4",
                            "dark:bg-gray-600 bg-gray-200",
                        )}
                    />
                    <CommonGithubStarButton />
                    <div
                        className={clsx(
                            "h-6",
                            "w-px",
                            "mx-4",
                            "dark:bg-gray-600 bg-gray-200",
                        )}
                    />
                    <CommonHomeButton />
                    <div
                        className={clsx(
                            "h-6",
                            "w-px",
                            "mx-4",
                            "dark:bg-gray-600 bg-gray-200",
                        )}
                    />
                    <CommonThemeToggle />
                </div>
            </div>
        </div>
    );
};
