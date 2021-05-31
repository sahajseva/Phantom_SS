import React, { FC } from "react";
import { Button, ButtonProps } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

import { useNavigation, useTranslate } from "@hooks";
import { ResourceRouterParams } from "../../../interfaces";

export type CreateButtonProps = ButtonProps & {
    resourceName?: string;
};

export const CreateButton: FC<CreateButtonProps> = ({
    resourceName,
    ...rest
}) => {
    const translate = useTranslate();
    const { create } = useNavigation();

    const { resource: routeResourceName } = useParams<ResourceRouterParams>();

    const onButtonClick = () => {
        create(resourceName ?? routeResourceName, "push");
    };

    return (
        <Button
            onClick={onButtonClick}
            type="default"
            icon={<PlusSquareOutlined />}
            {...rest}
        >
            {translate("buttons.create", "Create")}
        </Button>
    );
};
