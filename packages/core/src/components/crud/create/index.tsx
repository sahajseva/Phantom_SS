import React from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    Space,
    ButtonProps,
    PageHeader,
    PageHeaderProps,
    Tag,
} from "antd";
import pluralize from "pluralize";

import { useNavigation, useResourceWithRoute, useTranslate } from "@hooks";
import { SaveButton } from "@components";
import { ResourceRouterParams } from "../../../interfaces";

export interface CreateProps {
    title?: string;
    actionButtons?: React.ReactNode;
    saveButtonProps?: ButtonProps;
    pageHeaderProps?: PageHeaderProps;
}

export const Create: React.FC<CreateProps> = ({
    title,
    actionButtons,
    saveButtonProps,
    children,
    pageHeaderProps,
}) => {
    const { goBack } = useNavigation();

    const {
        resource: routeResourceName,
        id: idFromRoute,
    } = useParams<ResourceRouterParams>();
    const resourceWithRoute = useResourceWithRoute();

    const resource = resourceWithRoute(routeResourceName);

    const translate = useTranslate();

    const tags = [];
    if (idFromRoute) {
        tags.push(<Tag color="blue">Clone</Tag>);
    }

    return (
        <PageHeader
            ghost={false}
            onBack={goBack}
            tags={tags}
            title={
                title ??
                translate(
                    `common:resources.${resource.name}.Create`,
                    `Create ${pluralize.singular(resource.name)}`,
                )
            }
            {...pageHeaderProps}
        >
            <Card
                actions={[
                    <Space
                        key="action-buttons"
                        style={{ float: "right", marginRight: 24 }}
                    >
                        {actionButtons ?? (
                            <SaveButton
                                {...saveButtonProps}
                                htmlType="submit"
                            />
                        )}
                    </Space>,
                ]}
            >
                {children}
            </Card>
        </PageHeader>
    );
};
