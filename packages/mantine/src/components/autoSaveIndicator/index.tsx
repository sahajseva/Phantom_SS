import React from "react";
import { AutoSaveIndicatorProps, useTranslate } from "@refinedev/core";
import { Text } from "@mantine/core";
import {
    IconDots,
    IconRefresh,
    IconCircleCheck,
    IconExclamationCircle,
} from "@tabler/icons";

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
    status,
}) => {
    const translate = useTranslate();
    let message = null;
    let icon = <IconDots size="18px" />;

    switch (status) {
        case "success":
            message = translate("autosave.success", "saved");
            icon = <IconCircleCheck size="18px" />;
            break;
        case "error":
            message = translate("autosave.error", "autosave error");
            icon = <IconExclamationCircle size="18px" />;
            break;
        case "loading":
            message = translate("autosave.loading", "saving...");
            icon = <IconRefresh size="18px" />;
            break;
        default:
            // for idle
            message = translate("autosave.idle", "waiting for changes");
            break;
    }

    return (
        <Text size="sm" display="flex" align="center" mr="2" color="gray">
            {message}
            <span
                style={{ position: "relative", top: "3px", marginLeft: "3px" }}
            >
                {icon}
            </span>
        </Text>
    );
};
