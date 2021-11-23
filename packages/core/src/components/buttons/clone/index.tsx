import React, { FC } from "react";
import { Button, ButtonProps } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

import {
    useCan,
    useNavigation,
    useResourceWithRoute,
    useRouterContext,
    useTranslate,
} from "@hooks";
import { ResourceRouterParams } from "../../../interfaces";

type CloneButtonProps = ButtonProps & {
    resourceName?: string;
    recordItemId?: string;
    hideText?: boolean;
    ignoreAccessControlProvider?: boolean;
};

/**
 * `<CloneButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button> component`}.
 * It uses the {@link https://refine.dev/docs/api-references/hooks/navigation/useNavigation#clone `clone`} method from {@link https://refine.dev/docs/api-references/hooks/navigation/useNavigation useNavigation} under the hood.
 * It can be useful when redirecting the app to the create page with the record id route of resource.
 *
 * @see {@link https://refine.dev/docs/api-references/components/buttons/clone-button} for more details.
 */
export const CloneButton: FC<CloneButtonProps> = ({
    resourceName: propResourceName,
    recordItemId,
    hideText = false,
    ignoreAccessControlProvider = false,
    children,
    ...rest
}) => {
    const resourceWithRoute = useResourceWithRoute();

    const { clone } = useNavigation();

    const translate = useTranslate();

    const { useParams } = useRouterContext();

    const { resource: routeResourceName, id: idFromRoute } =
        useParams<ResourceRouterParams>();

    const resource = resourceWithRoute(routeResourceName);

    const resourceName = propResourceName ?? resource.name;

    const id = recordItemId ?? idFromRoute;

    const onButtonClick = () => {
        clone(routeResourceName, id);
    };

    const { data } = useCan({
        resource: resourceName,
        action: "create",
        params: { id },
        queryOptions: {
            enabled: !ignoreAccessControlProvider,
        },
    });

    return (
        <Button
            onClick={onButtonClick}
            icon={<PlusSquareOutlined />}
            disabled={data?.can === false}
            title={
                data?.reason
                    ? translate(
                          "buttons.notAccessTitle",
                          "You don't have permission to access",
                      )
                    : ""
            }
            {...rest}
        >
            {!hideText && (children ?? translate("buttons.clone", "Clone"))}
        </Button>
    );
};
