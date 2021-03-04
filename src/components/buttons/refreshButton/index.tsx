import React, { FC } from "react";
import { Button, ButtonProps } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import { useRouteMatch } from "react-router-dom";

import {
    useOne,
    useResource,
    useResourceWithRoute,
    useTranslate,
} from "@hooks";
import { MatchRoute } from "@interfaces";

type RefreshButtonProps = ButtonProps & {
    resourceName?: string;
    recordItemId?: string | number;
};

export const RefreshButton: FC<RefreshButtonProps> = ({
    resourceName: propResourceName,
    recordItemId,
    ...rest
}) => {
    const match = useRouteMatch({
        path: [
            "/resources/:resourceName/:action/:id",
            "/resources/:resourceName",
            "/*",
        ],
    });
    const translate = useTranslate();

    const {
        params: { resourceName: routeResourceName, id: idFromRoute },
    } = (match as unknown) as MatchRoute;

    const resourceName = propResourceName ?? routeResourceName;

    const resource = useResourceWithRoute(resourceName);

    const { refetch, isFetching } = useOne(
        resource.name,
        `${recordItemId ?? idFromRoute}`,
        { enabled: false },
    );

    return (
        <Button
            type="default"
            icon={<RedoOutlined spin={isFetching} />}
            onClick={() => refetch()}
            {...rest}
        >
            {translate("common:buttons.refresh", "Refresh")}
        </Button>
    );
};
