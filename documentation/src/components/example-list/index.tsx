import React from "react";
import { useLocation, useHistory } from "@docusaurus/router";

/** @ts-expect-error Docusaurus and Typescript doesn't play well together. */
import data from "@examples/examples-data.json";
import { EXAMPLES, SHOW_CASES } from "@site/src/assets/examples";
import clsx from "clsx";
import { GithubIconOutlined } from "@site/src/refine-theme/icons/github";
import { ArrowUpIcon } from "@site/src/refine-theme/icons/arrow-up";
import { AnimatePresence, motion } from "framer-motion";
import { Example } from "@site/src/types/examples";

type ExampleDoc = Record<
    "id" | "title" | "description" | "permalink" | "displayTitle",
    string
> & { tags: string[] };

const { examples, tags } = data as {
    examples: ExampleDoc[];
    tags: {
        name: string;
        color: string;
    }[];
};

const priorityTags = [
    "antd",
    "mui",
    "chakra-ui",
    "mantine",
    "headless",
    "auth-provider",
    "audit-log-provider",
    "data-provider",
    "live-provider",
    "notification-provider",
    "access-control",
    "next.js",
    "remix",
    "table",
    "react-table",
    "form",
    "react-hook-form",
];

const sortedTags = tags.sort((a, b) => {
    const aIndex = priorityTags.indexOf(a.name);
    const bIndex = priorityTags.indexOf(b.name);

    if (aIndex === -1) {
        return bIndex === -1 ? 0 : 1;
    } else {
        return bIndex === -1 ? -1 : aIndex - bIndex;
    }
});

const PREDEFINED_COLORS = {
    antd: "#fa8c16",
    mui: "#0081cb",
    mantine: "#0ea5e9",
    "chakra-ui": "#319795",
};

const PREDEFINED_NAMES = {
    antd: "Ant Design",
    "material-ui": "Material UI",
    "chakra-ui": "Chakra UI",
    csv: "CSV Import / Export",
    javascript: "JavaScript",
};

const ExampleList: React.FC = () => {
    const [showMore, setShowMore] = React.useState(false);

    const [query] = React.useState("");
    const [filters, setFilters] = React.useState<Set<string>>(
        new Set(tags.map(({ name }) => name)),
    );

    const { search } = useLocation();
    const { replace } = useHistory();

    React.useEffect(() => {
        // tags are stored in the query string as a comma separated list
        const params = new URLSearchParams(search);
        const tags = params.get("tags");
        if (tags) {
            // validate tags by checking `staticTags`
            const validTags = tags
                .split(",")
                .filter((tag) => tags.includes(tag));
            setFilters(new Set(validTags));
        }
    }, []);

    const filteredExamples = examples.filter((example) => {
        const queryMatch = `${example.displayTitle
            .replace("antd", "Ant Design")
            .replace("mui", "Material UI")} ${example.displayTitle} ${
            example.description
        }`
            .toLowerCase()
            .includes((query ?? "").toLowerCase());
        // if all tags are selected, do not filter
        if (filters.size === tags.length) {
            return queryMatch;
        }

        // all selected filters should be present in the example
        const filterMatch = Array.from(filters).every((filter) =>
            example.tags.includes(filter),
        );

        return queryMatch && filterMatch;
    });

    const beautify = (str: string) => {
        return str
            .replace("antd", "Ant Design")
            .replace("mui", "Material UI")
            .replace("next.js", "Next.js")
            .replace("next-js", "Next.js")
            .split("-")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")
            .replace("I18n", "i18n");
    };

    const getTagName = (tag: string) => {
        return PREDEFINED_NAMES[tag] || beautify(tag);
    };

    const getTagColor = (tag: string) => {
        return PREDEFINED_COLORS[tag] || undefined;
    };

    const updateURLParams = (nextFilters?: Set<string>) => {
        if (
            !nextFilters ||
            nextFilters.size === tags.length ||
            nextFilters.size === 0
        ) {
            replace({
                search: "",
            });
        } else {
            replace({
                search: `?tags=${Array.from(nextFilters).join(",")}`,
            });
        }
    };

    const updateFilters = (tag: string) => {
        const newFilters = new Set(filters);
        // if all tags are selected, unselect all and select the clicked tag
        if (filters.size === tags.length) {
            newFilters.clear();
            newFilters.add(tag);
        } else {
            if (filters.has(tag)) {
                newFilters.delete(tag);
            } else {
                newFilters.add(tag);
            }
        }

        if (newFilters.size === 0) {
            updateURLParams();
            setFilters(new Set(tags.map(({ name }) => name)));
        } else {
            updateURLParams(newFilters);
            setFilters(newFilters);
        }
    };

    const renderShowcaseExampleCard = (example: Example) => {
        return (
            <div
                key={example.title}
                className={clsx(
                    "max-w-[100%] 2xl:max-w-[416px]",
                    "flex flex-col",
                    "mx-auto",
                    "px-2 pb-6 pt-2 2xl:px-4 2xl:py-6",
                    "bg-gray-50 dark:bg-gray-800",
                    "rounded-lg",
                )}
            >
                <h3
                    className={clsx(
                        "not-prose",
                        "mb-0 mt-0",
                        "text-base 2xl:text-xl",
                        "text-gray-900 dark:text-gray-200",
                    )}
                >
                    {example.title}
                </h3>
                <img
                    className={clsx(
                        "mb-0 mt-2 2xl:mt-6",
                        "w-full sm:max-h-[360px] md:h-[360px] lg:h-[192px] 2xl:h-[242px]",
                        "object-cover",
                        "rounded-[2px]",
                    )}
                    src={example.image}
                    srcSet={example.image2x}
                    alt={example.title}
                />
                <p
                    className={clsx(
                        "not-prose",
                        "px-2 mb-0",
                        "text-gray-700 dark:text-gray-400",
                        "mt-4 2xl:mt-6",
                    )}
                    dangerouslySetInnerHTML={{ __html: example.description }}
                />
                <div
                    className={clsx(
                        "flex justify-between items-center",
                        "px-2 2xl:px-0 pt-4 2xl:pt-6 mt-auto",
                    )}
                >
                    <a
                        href={example.source}
                        className={clsx(
                            "flex items-center gap-2",
                            "no-underline",
                        )}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubIconOutlined
                            className={clsx("w-4 h-4 2xl:w-6 2xl:h-6")}
                        />
                        <span>Code</span>
                    </a>
                    {example.buttons.map((button, i) => {
                        return (
                            <a
                                key={i}
                                href={button.link}
                                className={clsx(
                                    "flex items-center gap-2",
                                    "no-underline",
                                )}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {button.icon({
                                    className: clsx("w-6 h-6"),
                                })}
                                <span>{button.text}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderShowcaseExamples = () => {
        const list = showMore ? [...SHOW_CASES, ...EXAMPLES] : SHOW_CASES;

        return (
            <>
                <div
                    className={clsx(
                        // "flex flex-row justify-center flex-wrap",
                        "grid grid-cols-1 lg:grid-cols-2",
                        "gap-4 2xl:gap-8",
                    )}
                >
                    {list.map((example) => {
                        return renderShowcaseExampleCard(example);
                    })}
                </div>
                <button
                    className={clsx(
                        "w-full h-12 2xl:h-16",
                        "flex justify-center items-center gap-4",
                        "bg-gray-100 dark:bg-gray-700",
                        "rounded-lg",
                        "mt-4 sm:mt-8 2xl:mt-10 py-2",
                    )}
                    onClick={() => {
                        setShowMore((prev) => !prev);
                    }}
                >
                    <div
                        className={clsx(
                            "flex justify-center items-center",
                            "w-8 h-8",
                            "text-gray-500",
                            "bg-gray-0 dark:bg-gray-800",
                            "rounded-[4px]",
                        )}
                    >
                        <ArrowUpIcon
                            className={clsx("w-3 h-3", {
                                "transform rotate-180": !showMore,
                            })}
                        />
                    </div>
                    <span
                        className={clsx(
                            "text-gray-700 dark:text-gray-400",
                            "text-sm 2xl:text-base font-semibold",
                        )}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </span>
                </button>
            </>
        );
    };

    const renderFilters = () => {
        return (
            <div className="flex flex-col">
                <h3
                    className={clsx(
                        "not-prose",
                        "mb-0 mt-0",
                        "text-[32px] leading-[40px] 2xl:text-[40px] 2xl:leading-[48px]",
                        "text-gray-700 dark:text-gray-200",
                    )}
                >
                    Other Examples
                </h3>
                <div
                    className={clsx(
                        "flex items-center justify-between mt-8 2xl:mt-10 pb-4",
                        "border-b border-gray-200 dark:border-gray-700",
                    )}
                >
                    <h3
                        className={clsx(
                            "not-prose",
                            "mb-0 mt-0",
                            "text-2xl 2xl:text-[32px] 2xl:leading-[40px]",
                            "text-gray-700 dark:text-gray-200",
                        )}
                    >
                        Filters
                    </h3>
                    <span
                        className={clsx(
                            "text-base 2xl:text-xl",
                            "text-gray-500",
                        )}
                    >
                        {filteredExamples.length} examples
                    </span>
                </div>
                <div className="flex justify-start gap-2 flex-wrap mt-4 2xl:mt-10">
                    {sortedTags.sort().map(({ name, color }) => {
                        const isActive = filters.has(name);
                        const allSelected = filters.size === tags.length;

                        const tagColor = getTagColor(name) ?? color;

                        return (
                            <button
                                key={name}
                                className={clsx(
                                    "appearance-none",
                                    "select-none",
                                    "rounded-lg",
                                    "flex items-center justify-center",
                                    "gap-2 px-3 py-[4px]",
                                    "text-sm",
                                    "cursor-pointer",
                                    {
                                        "text-gray-600 dark:text-gray-400":
                                            !isActive || allSelected,
                                        "text-gray-900 dark:text-gray-0":
                                            isActive && !allSelected,
                                        "bg-gray-100 dark:bg-gray-800":
                                            !isActive || allSelected,
                                    },
                                )}
                                style={{
                                    border:
                                        isActive &&
                                        !allSelected &&
                                        `1px solid ${tagColor}40`,
                                    backgroundColor:
                                        isActive && !allSelected
                                            ? `${tagColor}33`
                                            : "",
                                }}
                                onClick={() => updateFilters(name)}
                            >
                                <div
                                    className={clsx("w-2 h-2 rounded-full", {
                                        "bg-gray-400 dark:bg-gray-600":
                                            !isActive || allSelected,
                                    })}
                                    style={{
                                        backgroundColor:
                                            isActive && !allSelected
                                                ? tagColor
                                                : "",
                                    }}
                                />
                                {getTagName(name)}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderCard = (example: ExampleDoc) => {
        const { id, displayTitle, description, permalink } = example;
        return (
            <a
                href={permalink}
                key={id}
                className={clsx(
                    "flex flex-col h-full",
                    "rounded-lg",
                    "no-underline",
                    "py-4 2xl:py-6 pt-2 2xl:pt-6 pb-3 2xl:pb-4 px-4 2xl:px-6",
                    "bg-gray-50 dark:bg-gray-800",
                )}
            >
                <div
                    className={clsx(
                        "cursor-pointer",
                        "no-underline",
                        "font-bold",
                        "text-base 2xl:text-xl",
                        "text-gray-900 dark:text-gray-200",
                    )}
                >
                    {beautify(displayTitle)}
                </div>
                <div
                    className={clsx(
                        "cursor-pointer",
                        "no-underline",
                        "line-clamp-3",
                        "text-[14px] leading-[28px]",
                        "text-gray-700 dark:text-gray-400",
                        "my-2 2xl:my-6",
                    )}
                >
                    {description}
                </div>
                <div
                    className={clsx(
                        "flex flex-wrap gap-4 pt-1 pb-1 mt-auto",
                        "border-t border-gray-200 dark:border-gray-700",
                        "pt-3 2xl:pt-4",
                    )}
                >
                    {example.tags.map((tag) => (
                        <div
                            key={tag}
                            className={clsx([
                                "flex",
                                "items-center",
                                "justify-center",
                                "gap-2",
                            ])}
                        >
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor:
                                        getTagColor(tag) ??
                                        tags.find(({ name }) => name === tag)
                                            ?.color,
                                }}
                            />
                            <div
                                className={clsx(
                                    "text-xs 2xl:text-base",
                                    "text-gray-600 dark:text-gray-500",
                                )}
                            >
                                {getTagName(tag)}
                            </div>
                        </div>
                    ))}
                </div>
            </a>
        );
    };

    const renderCards = () => {
        return (
            <div
                className={clsx(
                    "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2",
                    "gap-4 2xl:gap-x-8 2xl:gap-y-12",
                )}
            >
                <AnimatePresence>
                    {filteredExamples.map((example) => {
                        return (
                            <motion.div
                                layout
                                key={example.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {renderCard(example)}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="">
            <div className="mt-10">{renderShowcaseExamples()}</div>
            <div className="mt-16">{renderFilters()}</div>
            <div className="mt-10">{renderCards()}</div>
        </div>
    );
};

export default ExampleList;
