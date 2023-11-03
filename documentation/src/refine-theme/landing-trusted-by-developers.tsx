import clsx from "clsx";
import React, { FC, useEffect } from "react";
import {
    OracleIcon,
    SalesforceIcon,
    CiscoIcon,
    DeloitteIcon,
    IbmIcon,
    MetaIcon,
    AtlassianIcon,
    JpMorganIcon,
    AutodeskIcon,
    IntelIcon,
    UpworkIcon,
    AmazonIcon,
} from "../components/landing/icons";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    className?: string;
};

export const LandingTrustedByDevelopers: FC<Props> = ({ className }) => {
    const lastChangedIndex = React.useRef<number>(0);

    const [randomIcons, setRandomIcons] = React.useState<IList>(() => {
        // get random 6 icon from the list.
        const randomIcons = list.sort(() => 0.5 - Math.random()).slice(0, 6);
        return randomIcons;
    });

    useEffect(() => {
        // change one random icon in the list every X seconds.
        const interval = setInterval(() => {
            setRandomIcons((prev) => {
                const { changedIndex, newList } = changeOneRandomIcon(
                    prev,
                    list,
                    lastChangedIndex.current,
                );
                lastChangedIndex.current = changedIndex;
                return newList;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [randomIcons]);

    return (
        <div className={clsx(className, "w-full")}>
            <div
                className={clsx(
                    "not-prose",
                    "relative",
                    "w-full",
                    "p-4 landing-md:p-10",
                    "dark:bg-landing-trusted-by-developers-dark bg-landing-trusted-by-developers",
                    "dark:bg-gray-800 bg-gray-50",
                    "rounded-3xl",
                )}
            >
                <p
                    className={clsx(
                        "whitespace-nowrap",
                        "px-0 landing-sm:px-6 landing-lg:px-0",
                        "text-base landing-sm:text-2xl",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Trusted by developers working at
                </p>
                <div
                    className={clsx(
                        "grid",
                        "grid-cols-3 landing-lg:grid-cols-6",
                        "justify-center",
                        "items-center",
                        "mt-6",
                    )}
                >
                    <AnimatePresence>
                        {randomIcons.map((item) => (
                            <motion.div
                                key={item.id}
                                animate={{ opacity: 1, display: "flex" }}
                                initial={{ opacity: 0, display: "none" }}
                                className={clsx(
                                    "flex",
                                    "items-center",
                                    "justify-center",
                                    "max-w-[187px]",
                                )}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

// change only one random icon in the list
const changeOneRandomIcon = (
    currentList: IList,
    list: IList,
    lastChangedIndex: number,
): { newList: IList; changedIndex: number } => {
    const newList = [...currentList];

    // pick randomIndex from the current list
    let randomIndex = Math.floor(Math.random() * newList.length);
    // if the randomIndex is the same as the last changed index, pick another randomIndex
    while (randomIndex === lastChangedIndex) {
        randomIndex = Math.floor(Math.random() * newList.length);
    }

    // pick randomIcon from the list
    let randomIcon = list[Math.floor(Math.random() * list.length)];
    // check if the randomIcon is already in the current list
    let isExist = newList.find((item) => item.id === randomIcon.id);
    // if the randomIcon is already in the current list, pick another randomIcon
    while (isExist) {
        randomIcon = list[Math.floor(Math.random() * list.length)];
        isExist = newList.find((item) => item.id === randomIcon.id);
    }

    // change the randomIcon in the current list
    newList[randomIndex] = randomIcon;

    return { newList, changedIndex: randomIndex };
};

type IList = {
    icon: React.ReactNode;
    id: number;
}[];

const list: IList = [
    {
        icon: <OracleIcon />,
        id: 1,
    },
    {
        icon: <SalesforceIcon />,
        id: 2,
    },
    {
        icon: <CiscoIcon />,
        id: 3,
    },
    {
        icon: <IbmIcon />,
        id: 4,
    },
    {
        icon: <DeloitteIcon />,
        id: 5,
    },
    {
        icon: <AutodeskIcon />,
        id: 6,
    },
    {
        icon: <JpMorganIcon />,
        id: 7,
    },
    {
        icon: <IntelIcon />,
        id: 8,
    },
    {
        icon: <AtlassianIcon />,
        id: 9,
    },
    {
        icon: <UpworkIcon />,
        id: 10,
    },
    {
        icon: <AutodeskIcon />,
        id: 11,
    },
    {
        icon: <MetaIcon />,
        id: 12,
    },
    {
        icon: <AmazonIcon />,
        id: 13,
    },
];
