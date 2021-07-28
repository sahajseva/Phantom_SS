import React from "react";
import { useParams } from "react-router-dom";
import { Card, PageHeader, PageHeaderProps, Row, Space, Spin } from "antd";

import { ResourceRouterParams } from "../../../interfaces";
import {
    EditButton,
    DeleteButton,
    RefreshButton,
    ListButton,
} from "@components";
import { useNavigation, useResourceWithRoute, useTranslate } from "@hooks";
import { userFriendlyResourceName } from "@definitions";

export interface ShowProps {
    Aside?: React.ReactNode;
    title?: string;
    canEdit?: boolean;
    canDelete?: boolean;
    actionButtons?: React.ReactNode;
    isLoading?: boolean;
    pageHeaderProps?: PageHeaderProps;
    resource?: string;
    recordItemId?: string;
}

export const Show: React.FC<ShowProps> = ({
    title,
    canEdit,
    canDelete,
    actionButtons,
    isLoading = false,
    children,
    pageHeaderProps,
    resource: resourceFromProps,
    recordItemId,
}) => {
    const translate = useTranslate();

    const { goBack, list } = useNavigation();

    const resourceWithRoute = useResourceWithRoute();
    const {
        resource: routeResourceName,
        action: routeFromAction,
        id: idFromRoute,
    } = useParams<ResourceRouterParams>();

    const resource = resourceWithRoute(resourceFromProps ?? routeResourceName);

    const isDeleteButtonVisible = canDelete ?? resource.canDelete;
    const isEditButtonVisible = canEdit ?? resource.canEdit;

    return (
        <PageHeader
            ghost={false}
            onBack={routeFromAction ? goBack : undefined}
            title={
                title ??
                translate(
                    `${resource.name}.titles.show`,
                    `Show ${userFriendlyResourceName(
                        resource.name,
                        "singular",
                    )}`,
                )
            }
            extra={
                <Row>
                    <Space key="extra-buttons">
                        {!recordItemId && (
                            <ListButton
                                data-testid="show-list-button"
                                resourceName={resource.name}
                            />
                        )}
                        {isEditButtonVisible && (
                            <EditButton
                                disabled={isLoading}
                                data-testid="show-edit-button"
                                resourceName={resource.name}
                                recordItemId={recordItemId ?? idFromRoute}
                            />
                        )}
                        {isDeleteButtonVisible && (
                            <DeleteButton
                                resourceName={resource.name}
                                data-testid="show-delete-button"
                                recordItemId={recordItemId ?? idFromRoute}
                                onSuccess={() =>
                                    list(resource.route ?? resource.name)
                                }
                            />
                        )}
                        <RefreshButton
                            resourceName={resource.name}
                            recordItemId={recordItemId ?? idFromRoute}
                        />
                    </Space>
                </Row>
            }
            {...pageHeaderProps}
        >
            <Spin spinning={isLoading}>
                <Card actions={actionButtons ? [actionButtons] : undefined}>
                    {children}
                </Card>
            </Spin>
        </PageHeader>
    );
};
