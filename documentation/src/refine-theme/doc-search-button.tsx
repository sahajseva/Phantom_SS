import clsx from "clsx";
import React from "react";
import { MagnifierIcon } from "./icons/magnifier";

type Props = React.ComponentProps<"button"> & {
    iconOnly?: boolean;
    iconClassName?: string;
};

export const DocSearchButton = React.forwardRef<HTMLButtonElement, Props>(
    function DocSearchButtonComponent(
        { iconOnly = false, iconClassName, ...props },
        ref,
    ) {
        return (
            <button
                ref={ref}
                type="button"
                {...props}
                className={clsx(
                    "text-gray-0",
                    "rounded-lg",
                    "flex items-center",
                    "bg-gray-700",
                    "gap-5",
                    "text-base",
                    "hover:bg-gray-600",
                    "transition-all",
                    "duration-200",
                    "ease-in-out",
                    {
                        "w-8 h-8 sm:w-10 sm:h-10": iconOnly,
                        "text-gray-500 dark:text-gray-400": iconOnly,
                        "bg-gray-200 dark:bg-gray-700": iconOnly,
                        "justify-center": iconOnly,
                        "justify-between": !iconOnly,
                        "py-2 pr-2 pl-4": !iconOnly,
                        "rounded-full": iconOnly,
                        "rounded-lg": !iconOnly,
                    },
                )}
            >
                {iconOnly && <MagnifierIcon className={clsx(iconClassName)} />}
                {!iconOnly && (
                    <div
                        className={clsx(
                            "flex items-center justify-between gap-5",
                        )}
                    >
                        <span className="opacity-75">
                            Search in documentation
                        </span>
                        <kbd
                            className={clsx(
                                "py-1 px-2",
                                "rounded",
                                "border border-gray-600",
                                "bg-gray-900",
                                "text-sm leading-4",
                                "text-gray-400",
                            )}
                        >
                            ⌘K
                        </kbd>
                    </div>
                )}
            </button>
        );
    },
);
